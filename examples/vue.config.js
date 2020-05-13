// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  chainWebpack(config) {
    config.resolve.alias.set('@', resolve('src'))
  },
  configureWebpack: {
    entry: '@/main.ts'
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  },
  lintOnSave: false
}
