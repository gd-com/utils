const { VECTOR2 } = require('../../constants')
const getFloat = require('../get_float')

/**
 * Decode Vector2
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
async function decode (genericDecoder, buf) {
  return {
    value: {
      x: await getFloat(buf, 0),
      y: await getFloat(buf, 4)
    },
    length: 8
  }
}

module.exports = {
  decode,
  type: VECTOR2
}
