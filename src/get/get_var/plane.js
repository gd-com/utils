const { PLANE } = require('../../constants')
const getFloat = require('../get_float')

/**
 * Decode Plane
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
async function decode (genericDecoder, buf) {
  return {
    value: {
      x: await getFloat(buf, 0),
      y: await getFloat(buf, 4),
      z: await getFloat(buf, 8),
      distance: await getFloat(buf, 12)
    },
    length: 16
  }
}

module.exports = {
  decode,
  type: PLANE
}
