const { TRANSFORM2D } = require('../../constants')
const getFloat = require('../get_float')

/**
 * Decode Transform2d
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
async function decode (genericDecoder, buf) {
  return Promise.resolve({
    value: [
      [
        await getFloat(buf, 0),
        await getFloat(buf, 4)
      ], [
        await getFloat(buf, 8),
        await getFloat(buf, 12)
      ], [
        await getFloat(buf, 16),
        await getFloat(buf, 20)
      ]
    ],
    length: 24
  })
}

module.exports = {
  decode,
  type: TRANSFORM2D
}
