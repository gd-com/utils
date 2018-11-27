const { VECTOR3 } = require('../../constants')
const getFloat = require('../get_float')

/**
 * Decode Vector3
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, buf) {
  return Promise.resolve({
    value: {
      x: getFloat(buf, 0),
      y: getFloat(buf, 4),
      z: getFloat(buf, 8)
    },
    length: 12
  })
}

module.exports = {
  decode,
  type: VECTOR3
}
