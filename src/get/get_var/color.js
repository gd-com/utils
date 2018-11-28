const { COLOR } = require('../../constants')
const getFloat = require('../get_float')

/**
 * Decode color
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
async function decode (genericDecoder, buf) {
  return {
    value: {
      r: await getFloat(buf, 0),
      g: await getFloat(buf, 4),
      b: await getFloat(buf, 8),
      a: await getFloat(buf, 12)
    },
    length: 16
  }
}

module.exports = {
  decode,
  type: COLOR
}
