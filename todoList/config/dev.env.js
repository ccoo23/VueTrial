'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"/api"', // 这里配置开发环境时接口地址,就是代表你上面要代理的地址
})
// module.exports = {
//   NODE_ENV: '"development"',
//   API_ROOT: '"/api"', // 这里配置开发环境时接口地址,就是代表你上面要代理的地址
// };
