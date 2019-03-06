const { RAW_ARRAY } = require('../../constants')
/**
 * Decode null
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, buf) {
  const bufLength = buf.readUInt32LE(0)

  return {
    value: buf.slice(4, bufLength + 4),
    length: bufLength + 4 + 4 // type +  length
  }
}

module.exports = {
  decode,
  type: RAW_ARRAY
}
