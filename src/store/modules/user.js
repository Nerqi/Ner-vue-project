import { login, logout, getInfo } from '@api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
import { cloneDeep } from 'lodash'
const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    userInfo: {},
    avatar: ''
  }
};
function trans (data) {
  data.forEach((item,index) => {
    const oldItem = cloneDeep(item);
    item = {};
    item.name = oldItem.menuCode || 'a'+oldItem.menuId;
    item.meta ={
      icon: oldItem.icon,
      title: oldItem.appMenuName,
      noCache: true
    };
    if (oldItem.menuType === '1'){
      item.component =  'Layout';
    } else {
      item.component = oldItem.path
    }
    item.path = oldItem.url;
    item.children = oldItem.children;
    data[index] = item;
    oldItem.children && trans(oldItem.children)
  })
}
const state = getDefaultState();
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  }
};
const actions = {
  login({ commit }, ui) {
    let { username, password, userId } = ui;
    let userInfo = {};
    if (userId){
      userInfo = { userId }
    } else {
      userInfo ={
        username: username.trim(), password: password
      }
    }
    return new Promise( (resolve, reject) => {
      login(userInfo).then(response => {
        const { info : data } = response;
        commit('SET_TOKEN', data.token || data);
        setToken(data.token || data);
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then( async response => {
        try {
          let { info : data } = response;
          let { name, avatar, menuList, staff_id} = data;
          const oldMenuList = cloneDeep(menuList);
          trans( menuList );
          data.menus = menuList;
          commit('SET_NAME', name);
          commit('SET_USERINFO', {userId: staff_id, userName: name, menuList: oldMenuList});
          commit('SET_AVATAR', avatar);
          resolve(data)
        } catch (e) {
          reject(e)
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken();
        resetRouter();
        commit('RESET_STATE');
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken();
      commit('RESET_STATE');
      resolve()
    })
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

