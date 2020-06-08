const devConfig = require('./config/config.dev')
const libConfig = require('./config/config.lib')

module.exports =
  process.env.npm_lifecycle_event === 'build:lib' ? libConfig : devConfig
