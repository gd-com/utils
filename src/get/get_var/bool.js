const { BOOL } = require('../../constants')

/**
 * Decode boolean
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Boolean, length: Number}}
 */
function getVarBool (genericDecoder, buf) {
  return {
    value: buf.readUInt32LE(0) === 1,
    length: 4
  }
}

module.exports = {
  decode: getVarBool,
  type: BOOL
}
