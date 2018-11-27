const { RECT2 } = require('../../constants')
const getFloat = require('../get_float')

/**
 * Decode Rect2
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, buf) {
  return Promise.resolve({
    value: {
      x1: getFloat(buf, 0),
      y1: getFloat(buf, 4),
      x2: getFloat(buf, 8),
      y2: getFloat(buf, 12)
    },
    length: 16
  })
}

module.exports = {
  decode,
  type: RECT2
}
