const { VECTOR3 } = require('../../constants')

/**
 * Decode Vector3
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, buf) {
  return {
    value: {
      x: buf.readFloatLE(0),
      y: buf.readFloatLE(4),
      z: buf.readFloatLE(8)
    },
    length: 12
  }
}

module.exports = {
  decode,
  type: VECTOR3
}
