const { COLOR } = require('../../constants')

/**
 * Decode color
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Object, length: Number}}
 */
function getVarColor (genericDecoder, buf) {
  return {
    value: {
      r: buf.readFloatLE(0),
      g: buf.readFloatLE(4),
      b: buf.readFloatLE(8),
      a: buf.readFloatLE(12)
    },
    length: 16
  }
}

module.exports = {
  decode: getVarColor,
  type: COLOR
}
