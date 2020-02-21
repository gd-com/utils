const { TRANSFORM2D } = require('../../constants')

/**
 * Decode Transform2d
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Object, length: Number}}
 */
function getVarTransform2d (genericDecoder, buf) {
  return {
    value: [
      [
        buf.readFloatLE(0),
        buf.readFloatLE(4)
      ], [
        buf.readFloatLE(8),
        buf.readFloatLE(12)
      ], [
        buf.readFloatLE(16),
        buf.readFloatLE(20)
      ]
    ],
    length: 24
  }
}

module.exports = {
  decode: getVarTransform2d,
  type: TRANSFORM2D
}
