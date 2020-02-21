const { NULL } = require('../../constants')

/**
 * Decode null
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Null, length: Number}}
 */
function getVarNull (genericDecoder, buf) {
  return {
    value: null,
    length: 0
  }
}

module.exports = {
  decode: getVarNull,
  type: NULL
}
