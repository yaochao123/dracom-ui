const { baseConfig, resolve } = require('./config.base')

module.exports = {
  publicPath: baseConfig.publicPath,
  parallel: baseConfig.parallel,
  productionSourceMap: baseConfig.productionSourceMap,
  pages: {
    index: {
      entry: 'examples/src/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    },
    mobile: {
      entry: 'examples/mobile/main.ts',
      tempalte: 'public/index.html',
      filename: 'mobile.html'
    }
  },
  configureWebpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: 'vue-loader'
        },
        {
          loader: resolve('examples/src/markdown-loader/markdownLoader')
        }
      ]
    })
  },
  chainWebpack: baseConfig.chainWebpack,
  css: baseConfig.css,
  devServer: baseConfig.devServer,
  lintOnSave: baseConfig.lintOnSave
}
