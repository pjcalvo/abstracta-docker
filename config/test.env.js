var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  VUE_APP_API_END: '"https://staging-copey-registry-service.herokuapp.com"'
})