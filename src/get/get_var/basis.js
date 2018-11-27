const { BASIS } = require('../../constants')
const getFloat = require('../get_float')

/**
 * Decode BASIS
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
      ]
    ],
    length: 36
  })
}

module.exports = {
  decode,
  type: BASIS
}
