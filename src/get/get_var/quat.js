const { QUAT } = require('../../constants')
const getFloat = require('../get_float')

/**
 * Decode Quaternion
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
async function decode (genericDecoder, buf) {
  return {
    value: {
      coordinate: {
        x: await getFloat(buf, 0),
        y: await getFloat(buf, 4),
        z: await getFloat(buf, 8)
      },
      size: {
        w: await getFloat(buf, 12)
      }
    },
    length: 16
  }
}

module.exports = {
  decode,
  type: QUAT
}
