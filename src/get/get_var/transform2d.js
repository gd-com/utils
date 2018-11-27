const { TRANSFORM2D } = require('../../constants')
const getFloat = require('../get_float')

/**
 * Decode Transform2d
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, buf) {
  return Promise.resolve({
    value: [
      [
        getFloat(buf, 0),
        getFloat(buf, 4)
      ], [
        getFloat(buf, 8),
        getFloat(buf, 12)
      ], [
        getFloat(buf, 16),
        getFloat(buf, 20)
      ]
    ],
    length: 24
  })
}

module.exports = {
  decode,
  type: TRANSFORM2D
}
