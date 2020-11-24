const path = require('path');
const webpack = require('webpack');
module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(svg|woff|woff2|ttf|eot)$/i,
        loaders: 'file-loader'
      },
    ]
  },
  entry: {
    vendor: [ 'vue', 'vue/dist/vue.esm.js', 'vue-router', 'axios', 'iview', 'view-design', 'vuex', 'echarts']
  },
  output: {
    path: path.join(__dirname, '../public/vendor'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../public/vendor', '[name]-manifest.json'),
      name: '[name]_library',
      context: path.join(__dirname, '..')
    })
  ]
};
