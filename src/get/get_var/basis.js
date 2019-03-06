const { BASIS } = require('../../constants')

/**
 * Decode BASIS
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, buf) {
  return {
    value: [
      [
        buf.readFloatLE(buf, 0),
        buf.readFloatLE(buf, 4),
        buf.readFloatLE(buf, 8)
      ], [
        buf.readFloatLE(buf, 12),
        buf.readFloatLE(buf, 16),
        buf.readFloatLE(buf, 20)
      ], [
        buf.readFloatLE(buf, 24),
        buf.readFloatLE(buf, 28),
        buf.readFloatLE(buf, 32)
      ]
    ],
    length: 36
  }
}

module.exports = {
  decode,
  type: BASIS
}
