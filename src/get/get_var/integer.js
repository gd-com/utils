const { INTEGER } = require('../../constants')
const get32 = require('../get_32')
const get64 = require('../get_64')

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
    result = {
      value: await get64(buf, 0),
      length: 8
    }
  } else {
    result = {
      value: await get32(buf, 0),
      length: 4
    }
  }

  return result
}

module.exports = {
  decode,
  type: INTEGER
}
