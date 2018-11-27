const { VECTOR3 } = require('../../constants')
const getFloat = require('../get_float')

/**
 * Decode Vector3
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
async function decode (genericDecoder, buf) {
  return Promise.resolve({
    value: {
      x: await getFloat(buf, 0),
      y: await getFloat(buf, 4),
      z: await getFloat(buf, 8)
    },
    length: 12
  })
}

module.exports = {
  decode,
  type: VECTOR3
}
