const { PLANE } = require('../../constants')
const getFloat = require('../get_float')

/**
 * Decode Plane
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, buf) {
  return Promise.resolve({
    value: {
      x: getFloat(buf, 0),
      y: getFloat(buf, 4),
      z: getFloat(buf, 8),
      distance: getFloat(buf, 12)
    },
    length: 16
  })
}

module.exports = {
  decode,
  type: PLANE
}
