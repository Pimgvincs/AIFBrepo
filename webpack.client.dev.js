const { merge } = require('webpack-merge')
const common = require('./webpack.client.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    hot: true,
    port: 8082,
    open: true,
    historyApiFallback: true,
    devMiddleware: {
      publicPath: '/'
    },
    //proxy for api calls to the backend server
    proxy: {
      '/api': {
        target: 'http://localhost:3003',
        secure: false,
        changeOrigin: true
      }
    }
  }
})
