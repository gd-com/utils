const { RECT2 } = require('../../constants')

/**
 * Decode Rect2
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Object, length: Number}}
 */
function getVarRect2 (genericDecoder, buf) {
  return {
    value: {
      x_coordinate: buf.readFloatLE(0),
      y_coordinate: buf.readFloatLE(4),
      x_size: buf.readFloatLE(8),
      y_size: buf.readFloatLE(12)
    },
    length: 16
  }
}

module.exports = {
  decode: getVarRect2,
  type: RECT2
}
