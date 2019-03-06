const { PLANE } = require('../../constants')

/**
 * Decode Plane
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, buf) {
  return {
    value: {
      x: buf.readFloatLE(0),
      y: buf.readFloatLE(4),
      z: buf.readFloatLE(8),
      distance: buf.readFloatLE(12)
    },
    length: 16
  }
}

module.exports = {
  decode,
  type: PLANE
}
