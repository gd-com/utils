const { STRING } = require('../../constants')
const getString = require('../get_string')

/**
 * Decode String
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, buf) {
  const len = buf.readUInt32LE(0)
  const pad = len % 4 === 0 ? 0 : 4 - (len % 4)
  const value = getString(buf)

  return Promise.resolve({
    value,
    length: 4 + len + pad
  })
}

module.exports = {
  decode,
  type: STRING
}
