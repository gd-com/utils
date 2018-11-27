const { QUAT } = require('../../constants')
const getFloat = require('../get_float')

/**
 * Decode Quaternion
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, buf) {
  return Promise.resolve({
    value: {
      coordinate: {
        x: getFloat(buf, 0),
        y: getFloat(buf, 4),
        z: getFloat(buf, 8)
      },
      size: {
        w: getFloat(buf, 12)
      }
    },
    length: 16
  })
}

module.exports = {
  decode,
  type: QUAT
}
