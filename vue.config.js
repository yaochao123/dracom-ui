const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  parallel: false,
  productionSourceMap: false,
  pages: {
    index: { entry: 'examples/src/main.ts', template: 'public/index.html', filename: 'index.html' }
  },
  chainWebpack(config) {
    config.resolve.alias.set('@', resolve('./examples/src'))
  },
  css: { extract: false },
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  },
  lintOnSave: false
}
