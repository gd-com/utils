const { COLOR } = require('../../constants')
const getFloat = require('../get_float')

/**
 * Decode color
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, buf) {
  return Promise.resolve({
    value: {
      r: getFloat(buf, 0),
      g: getFloat(buf, 4),
      b: getFloat(buf, 8),
      a: getFloat(buf, 12)
    },
    length: 16
  })
}

module.exports = {
  decode,
  type: COLOR
}
