const get = require('./get')
const put = require('./put')
const GdBuffer = require('./buffer/GdBuffer')

module.exports = {
  GdBuffer,
  ...get,
  ...put
}
