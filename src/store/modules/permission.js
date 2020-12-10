import {  constantRoutes } from '@/router'
import Layout from '@/layout/index'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = [];
  routes.forEach(route => {
    const tmp = { ...route };
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  });
  return res
}

/**
 * 根据菜单信息，手动拼装route
 * component 按需加载的组件，对应接口信息里的path
 */
export const filterAsyncRouter = (routers) => {
  return routers.filter(router => {
    if (router.component) {
      if (router.component === 'Layout') {
        router.component = Layout
      } else {
        const component = router.component;
        router.component = loadView(component)
      }
    }
    if (router.children && router.children.length) {
      router.children = filterAsyncRouter(router.children)
    }
    return true
  });
};
export const loadView = (component_path) => {
  //  return (resolve) => require([`@/view/${view}`], resolve)
  //  return () => import('@/view/' + view)
  return resolve => require([`@/view/${component_path}`], resolve)
};

const state = {
  routes: [], // 全部的路由集合
  addRoutes: [] // 手动添加的路由集合
};

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes;
    state.routes = constantRoutes.concat(routes);
  }
};

const actions = {
  generateRoutes({ commit }, menus) {
    return new Promise(resolve => {
      let accessedRoutes;
      accessedRoutes = filterAsyncRouter(menus);
      commit('SET_ROUTES', accessedRoutes);
      resolve(accessedRoutes)
    })
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
