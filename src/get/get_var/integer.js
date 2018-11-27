const { INTEGER } = require('../../constants')
const get32 = require('../get_32')

/**
 * Decode integer
 * @param genericDecoder
 * @param buf
 * @param flag
 * @returns {Object}
 */
async function decode (genericDecoder, buf, flag = 0) {
  let result = null
  if (flag === 1) {
    // TODO decode 64 bit integer
    result = {
      value: null,
      length: 8
    }
  } else {
    result = {
      value: await get32(buf, 0),
      length: 4
    }
  }

  return Promise.resolve(result)
}

module.exports = {
  decode,
  type: INTEGER
}
