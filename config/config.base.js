const path = require('path')
const cssOptions = require('./config.css')

const resolve = dir => {
  return path.join(__dirname, '../', dir)
}

const baseConfig = {
  publicPath: './',
  parallel: false,
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('examples/src'))
      .set('@@', resolve('examples/mobile'))
      .set('@src', resolve('src/'))
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

module.exports = {
  baseConfig,
  resolve
}
