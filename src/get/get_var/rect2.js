const { RECT2 } = require('../../constants')
const getFloat = require('../get_float')

/**
 * Decode Rect2
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
async function decode (genericDecoder, buf) {
  return Promise.resolve({
    value: {
      x1: await getFloat(buf, 0),
      y1: await getFloat(buf, 4),
      x2: await getFloat(buf, 8),
      y2: await getFloat(buf, 12)
    },
    length: 16
  })
}

module.exports = {
  decode,
  type: RECT2
}
