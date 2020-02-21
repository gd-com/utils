const get = require('./get')
const put = require('./put')
const constants = require('./constants')

module.exports = {
  ...get,
  ...put,
  TYPE: constants
}
