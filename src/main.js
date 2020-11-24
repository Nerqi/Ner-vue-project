import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.less'
Vue.use(ElementUI);
const { mockXHR } = require('../mock');
mockXHR(); // 启动mock，有接口走服务，无接口走mock
/**
 * 解决IE不兼容问题
 */
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
/* eslint no-extend-native: ["error", { "exceptions": ["Array"] }] */
if (typeof Array.find === 'undefined') {
  Array.prototype.find = function(fn) {
    for (let i in this) {
      if (fn(this[i], i, this) === true) {
        return this[i];
      }
    }
    return undefined;
  };
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
