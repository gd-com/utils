const { VECTOR3 } = require('../../constants')

/**
 * Decode Vector3
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Object, length: Number}}
 */
function getVarVector3 (genericDecoder, buf) {
  return {
    value: {
      x: buf.readFloatLE(0),
      y: buf.readFloatLE(4),
      z: buf.readFloatLE(8)
    },
    length: 12
  }
}

module.exports = {
  decode: getVarVector3,
  type: VECTOR3
}
