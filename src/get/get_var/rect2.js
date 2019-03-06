const { RECT2 } = require('../../constants')

/**
 * Decode Rect2
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, buf) {
  return {
    value: {
      x1: buf.readFloatLE(0),
      y1: buf.readFloatLE(4),
      x2: buf.readFloatLE(8),
      y2: buf.readFloatLE(12)
    },
    length: 16
  }
}

module.exports = {
  decode,
  type: RECT2
}
