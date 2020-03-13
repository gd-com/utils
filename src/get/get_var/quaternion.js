const { QUATERNION } = require('../../constants')

/**
 * Decode Quaternion
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Object, length: Number}}
 */
function getVarQuaternion (genericDecoder, buf) {
  return {
    value: {
      x: buf.readFloatLE(0),
      y: buf.readFloatLE(4),
      z: buf.readFloatLE(8),
      w: buf.readFloatLE(12)
    },
    length: 16
  }
}

module.exports = {
  decode: getVarQuaternion,
  type: QUATERNION
}
