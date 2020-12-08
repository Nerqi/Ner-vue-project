import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
const defaultSettings = require('@/settings.js');
Vue.use(Router);
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/view/login/login'),
    hidden: true
  },{
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/view/main/main'),
      meta: { title: defaultSettings.title, icon: 'dashboard' },
    }]
  },
];
const createRouter = () => new Router({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
});
const router = createRouter();
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher
}
export default router
