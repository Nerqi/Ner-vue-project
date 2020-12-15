function changeStr(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const requireComonent = require.context('./', true, /\.vue$/);
const commonComponent = {
  install: function(Vue) {
    requireComonent.keys().forEach((item) => {
      let config = requireComonent(item);
      let componentName = changeStr(config.default.name);
      Vue.component(componentName, config.default || config);
    });
  }

};
export default commonComponent;


