const { NULL } = require('../../constants')

/**
 * Decode null
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, buf) {
  return {
    value: null,
    length: 0
  }
}

module.exports = {
  decode,
  type: NULL
}
