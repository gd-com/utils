const { BASIS } = require('../constants')

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
        buf.readFloatLE(0),
        buf.readFloatLE(4),
        buf.readFloatLE(8)
      ], [
        buf.readFloatLE(12),
        buf.readFloatLE(16),
        buf.readFloatLE(20)
      ], [
        buf.readFloatLE(24),
        buf.readFloatLE(28),
        buf.readFloatLE(32)
      ]
    ],
    length: 36
  })
}

module.exports = {
  decode,
  type: BASIS
}
