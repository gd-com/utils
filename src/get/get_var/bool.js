const { BOOL } = require('../../constants')

/**
 * Decode boolean
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, buf) {
  return {
    value: buf.readUInt32LE(0) === 1,
    length: 4
  }
}

module.exports = {
  decode,
  type: BOOL
}
