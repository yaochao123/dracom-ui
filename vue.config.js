// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  configureWebpack: {
    entry: 'src/index.ts',
    output: {
      path: path.resolve(__dirname, './lib'),
      filename: 'index.js',
      libraryTarget: 'umd',
      library: 'Dracom'
    }
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  },
  lintOnSave: false
}
