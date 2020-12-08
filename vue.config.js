const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = dir => {
  return path.join(__dirname, dir)
};
module.exports  = {
  publicPath: '/',
  assetsDir: './static',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    port: 8080,
    proxy: { // 设置代理
      'fwjg': {
        target: 'http://10.15.50.24:9001/fwjg/',
        changeOrigin: true,
        pathRewrite: {
          '^/fwjg': ''
        }
      }
    },
    after: require('./mock/mock-server.js') // 有接口走服务，无接口走mock
  },
  configureWebpack: config =>{
    config.devtool = 'source-map';
    config.performance = {
      hints: 'warning',
      maxEntrypointSize: 50000000,
      maxAssetSize: 30000000
    };
    config.resolve.alias = {
      '@': resolve('src'),
      '@api': resolve('src/api'),
      '@view': resolve('src/view'),
    };
    if (process.env.NODE_ENV === 'production') { // 如果是打包编译的话
      get_DllReferencePlugin(config); // 调用组装方法
      get_HtmlWebpackPlugin(config); // 调用组装方法
    }
  }
};
// 为webpack组装DllReferencePlugin插件
function get_DllReferencePlugin(config) {
  config.plugins.push(
    new webpack.DllReferencePlugin({ // dll 打包优化，预先打包第三方包
      context: __dirname,
      manifest: require("./public/vendor/vendor-manifest.json") // 通知webpack，预先打包文件vendor-manifest.json
    })
  )
}
// 为webpack组装HtmlWebpackPlugin插件
function get_HtmlWebpackPlugin(config) {
  config.plugins.push(
    new HtmlWebpackPlugin({
      filename: 'index.html', // html文件的文件名，默认是index.html
      template: './public/index.html', // 指定你生成的文件所依赖哪一个html文件模板，使用自定义的模板文件的时候，需要安装对应的loader
      libJsName: '/vendor/vendor.dll.js', // 用于告知index.html <script>中引用的js文件
      minify: {
        removeAttributeQuotes: true, // 移除属性的引号
        removeCommentsL: true, // 清理html中的注释
        collapseWhitespace: true, // 清理html中的空格、换行符
        minifyCSS: true, // 压缩html内的样式
        minifyJS: true // 压缩html内的js
      },
      inject: true // 默认值，script标签位于html文件的 body 底部
    })
  )
}
