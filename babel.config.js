let options = {
  presets: ['@vue/cli-plugin-babel/preset']
}

const plugins = [
  'import',
  {
    libraryName: 'dracom-ui',
    libraryDirectory: 'src/components'
  }
]

if (process.env.npm_lifecycle_event !== 'build:lib') {
  // options = Object.assign(options, { plugins })
}
// console.log(options)
module.exports = options
