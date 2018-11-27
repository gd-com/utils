const { FLOAT } = require('../../constants')
const getFloat = require('../get_float')
const getDouble = require('../get_double')

/**
 * Decode float
 * @param genericDecoder
 * @param buf
 * @param flag
 * @returns {Object}
 */
function decode (genericDecoder, buf, flag) {
  let result = null
  // always encode real as double cf : marshalls.cpp L842
  // but sometimes can be float if double is not necessary
  if (flag === 1) {
    result = {
      value: getDouble(buf, 0),
      length: 8
    }
  } else {
    result = {
      value: getFloat(buf, 0),
      length: 4
    }
  }
  return Promise.resolve(result)
}

module.exports = {
  decode,
  type: FLOAT
}
