const { RAW_ARRAY } = require('../../constants')
const getU32 = require('../get_u32')

/**
 * Decode null
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
async function decode (genericDecoder, buf) {
  const bufLength = await getU32(buf, 0)

  return Promise.resolve({
    value: buf.slice(4, bufLength + 4),
    length: bufLength + 4 + 4 // type +  length
  })
}

module.exports = {
  decode,
  type: RAW_ARRAY
}
