import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
// import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false });

const whiteList = ['/login','/auth-redirect','/PreviewScreen']; // 无需token验证的页面，设置白名单

router.beforeEach(async(to, from, next) => {
  NProgress.start();
  //document.title = getPageTitle(to.meta.title);
  const hasToken = getToken();
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' });
      NProgress.done()
    } else {
      const hasGetUserInfo = store.getters.name;
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          const { menus } = await store.dispatch('user/getInfo');
          const accessRoutes = await store.dispatch('permission/generateRoutes', menus);
          router.addRoutes(accessRoutes);
          next({ ...to, replace: true })
        } catch (error) {
          await store.dispatch('user/resetToken');
          Message.error(error || 'Has Error');
          next('/login');
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login`);
      NProgress.done()
    }
  }
});
router.afterEach(() => {
  NProgress.done()
});
