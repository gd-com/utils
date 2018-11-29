const { VECTOR2 } = require('../../constants')

/**
 * Decode Vector2
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
async function decode (genericDecoder, buf) {
  return {
    value: {
      x: buf.readFloatLE(0),
      y: buf.readFloatLE(4)
    },
    length: 8
  }
}

module.exports = {
  decode,
  type: VECTOR2
}
