const { VECTOR2 } = require('../../constants')

/**
 * Decode Vector2
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Object, length: Number}}
 */
function getVarVector2 (genericDecoder, buf) {
  return {
    value: {
      x: buf.readFloatLE(0),
      y: buf.readFloatLE(4)
    },
    length: 8
  }
}

module.exports = {
  decode: getVarVector2,
  type: VECTOR2
}
