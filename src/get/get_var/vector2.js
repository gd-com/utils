const { VECTOR2 } = require('../../constants')
const getFloat = require('../get_float')

/**
 * Decode Vector2
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, buf) {
  return Promise.resolve({
    value: {
      x: getFloat(buf, 0),
      y: getFloat(buf, 4)
    },
    length: 8
  })
}

module.exports = {
  decode,
  type: VECTOR2
}
