const devConfig = require('./build/config.dev')
const libConfig = require('./build/build.lib')

module.exports =
  process.env.npm_lifecycle_event === 'build:lib' ? libConfig : devConfig
