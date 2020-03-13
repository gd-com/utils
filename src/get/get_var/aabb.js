const { AABB } = require('../../constants')

/**
 * Decode AABB
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: AABB, length: Number}}
 */
function getVarAABB (genericDecoder, buf) {
  return {
    value: {
      x_coordinate: buf.readFloatLE(0),
      y_coordinate: buf.readFloatLE(4),
      z_coordinate: buf.readFloatLE(8),
      x_size: buf.readFloatLE(12),
      y_size: buf.readFloatLE(16),
      z_size: buf.readFloatLE(20)
    },
    length: 24
  }
}

module.exports = {
  decode: getVarAABB,
  type: AABB
}
