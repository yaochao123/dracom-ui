// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  chainWebpack(config) {
    config.resolve.alias.set('@', resolve('src'))
  },
  configureWebpack: {
    entry: '@/index.ts'
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  },
  lintOnSave: false
}
