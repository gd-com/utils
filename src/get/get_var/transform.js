const { TRANSFORM } = require('../../constants')
const getFloat = require('../get_float')

/**
 * Decode Transform
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
async function decode (genericDecoder, buf) {
  return Promise.resolve({
    value: [
      [
        await getFloat(buf, 0),
        await getFloat(buf, 4),
        await getFloat(buf, 8)
      ], [
        await getFloat(buf, 12),
        await getFloat(buf, 16),
        await getFloat(buf, 20)
      ], [
        await getFloat(buf, 24),
        await getFloat(buf, 28),
        await getFloat(buf, 32)
      ], [
        await getFloat(buf, 36),
        await getFloat(buf, 40),
        await getFloat(buf, 44)
      ]
    ],
    length: 48
  })
}

module.exports = {
  decode,
  type: TRANSFORM
}
