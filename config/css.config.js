let cssOptions = {
  extract: false
}

const loaderOptions = {
  postcss: {
    plugins: [
      require('postcss-px2rem')({
        remUnit: 37.5
      })
    ]
  }
}

if (process.env.npm_lifecycle_event === 'build:lib') {
  cssOptions = Object.assign(cssOptions, loaderOptions)
}

module.exports = cssOptions
