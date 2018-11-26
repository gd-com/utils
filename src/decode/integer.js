const { INTEGER } = require('../constants')

let { Int64LE } = require('int64-buffer')

/**
 * Decode integer
 * @param genericDecoder
 * @param buf
 * @param flag
 * @returns {Object}
 */
function decode (genericDecoder, buf, flag = 0) {
  let result = null
  if (flag === 1) {
    result = {
      value: parseInt(Int64LE(buf).toString(), 10),
      length: 8
    }
  } else {
    result = {
      value: buf.readInt32LE(0),
      length: 4
    }
  }

  return Promise.resolve(result)
}

module.exports = {
  decode,
  type: INTEGER
}
