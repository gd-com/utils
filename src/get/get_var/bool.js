const { BOOL } = require('../../constants')
const getU32 = require('../get_u32')

/**
 * Decode boolean
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, buf) {
  return Promise.resolve({
    value: getU32(buf, 0) === 1,
    length: 4
  })
}

module.exports = {
  decode,
  type: BOOL
}
