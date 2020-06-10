const fs = require('fs')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { baseConfig, resolve } = require('./config.base')
const join = path.join

function getComponentEntries(path) {
  let files = fs.readdirSync(resolve(path))
  const componentEntries = files.reduce((ret, item) => {
    const itemPath = join(path, item)
    const isDir = fs.statSync(itemPath).isDirectory()
    if (isDir) {
      ret[item] = resolve(join(itemPath, 'index.ts'))
    }
    return ret
  }, {})
  return componentEntries
}

function firstUpperCase(str) {
  return str.replace(/\b(\w)(\w*)/g, function($0, $1, $2) {
    return $1.toUpperCase() + $2.toLowerCase()
  })
}

const libConfig = {
  productionSourceMap: baseConfig.productionSourceMap,
  //  输出文件目录
  outputDir: resolve('lib'),
  //  webpack配置
  configureWebpack: {
    //  入口文件
    entry: {
      ...getComponentEntries('src/components'),
      index: resolve('src/index.ts')
    },
    //  输出配置
    output: {
      //  文件名称
      filename: chunkData => {
        return `Dr${firstUpperCase(chunkData.chunk.name)}/index.js`
      },
      //  构建依赖类型
      libraryTarget: 'umd',
      //  库中被导出的项
      libraryExport: 'default',
      //  引用时的依赖名
      library: 'dracom-ui'
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: resolve('src/style/variables.css'),
          to: resolve('lib/variables.css')
        }
      ])
    ],
    externals: {
      vue: 'Vue'
    }
  },
  css: baseConfig.css,
  chainWebpack: config => {
    // config.optimization.delete('splitChunks')
    config.plugins.delete('copy')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.plugins.delete('html')
    config.plugins.delete('hmr')
    config.entryPoints.delete('app')
    config.resolve.alias
      .set('@', resolve('examples/src'))
      .set('@@', resolve('examples/mobile'))
      .set('@src', resolve('src/'))
  },
  lintOnSave: false
}

module.exports = libConfig
