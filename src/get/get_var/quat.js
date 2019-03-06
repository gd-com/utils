const { QUAT } = require('../../constants')

/**
 * Decode Quaternion
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, buf) {
  return {
    value: {
      coordinate: {
        x: buf.readFloatLE(0),
        y: buf.readFloatLE(4),
        z: buf.readFloatLE(8)
      },
      size: {
        w: buf.readFloatLE(12)
      }
    },
    length: 16
  }
}

module.exports = {
  decode,
  type: QUAT
}
