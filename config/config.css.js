let sassOptions = {
  // 给 sass-loader 传递选项
  sass: {
    // @/ 是 src/ 的别名
    prependData: `@import "@src/style/tool/_index.scss";`
  }
}

let cssOptions = {
  extract: {
    filename: '[name]/style.css'
  },
  loaderOptions: sassOptions
}

const options = {
  loaderOptions: {
    postcss: {
      plugins: [
        require('postcss-px2rem')({
          remUnit: 37.5
        })
      ]
    },
    ...sassOptions
  }
}

if (process.env.npm_lifecycle_event === 'build:lib') {
  cssOptions = Object.assign(cssOptions, options)
}

module.exports = cssOptions
