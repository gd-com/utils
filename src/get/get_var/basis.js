const { BASIS } = require('../../constants')
const getFloat = require('../get_float')

/**
 * Decode BASIS
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, buf) {
  return Promise.resolve({
    value: [
      [
        getFloat(buf, 0),
        getFloat(buf, 4),
        getFloat(buf, 8)
      ], [
        getFloat(buf, 12),
        getFloat(buf, 16),
        getFloat(buf, 20)
      ], [
        getFloat(buf, 24),
        getFloat(buf, 28),
        getFloat(buf, 32)
      ]
    ],
    length: 36
  })
}

module.exports = {
  decode,
  type: BASIS
}
