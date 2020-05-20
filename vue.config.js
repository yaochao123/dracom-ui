const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
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
      tempalte: 'public/index.html'
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('./examples/src'))
      .set('@@', resolve('./examples/mobile'))
  },
  configureWebpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: 'vue-loader'
        },
        {
          loader: require.resolve(
            './examples/src/markdown-loader/markdownLoader'
          )
        }
      ]
    })
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
