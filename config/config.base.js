const path = require('path')
const cssOptions = require('./config.css')
const CopyWebpackPlugin = require('copy-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '../', dir)
}
module.exports = {
  publicPath: './',
  parallel: false,
  productionSourceMap: false,
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
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('examples/src'))
      .set('@@', resolve('examples/mobile'))
      .set('@src', resolve('src/'))
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
    config.plugins.push(
      new CopyWebpackPlugin([
        {
          from: resolve('src/style/variables.css'),
          to: resolve('lib/variables.css')
        }
      ])
    )
  },
  css: cssOptions,
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  },
  lintOnSave: false
}
