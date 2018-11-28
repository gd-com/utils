const { DICTIONARY } = require('../../constants')
const getU32 = require('../get_u32')

/**
 * Decode Dictionnary
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
async function decode (genericDecoder, buf) {
  const nbEntries = await getU32(buf, 0) & 0x7FFFFFFF
  // const shared = !!getU32(buf, 0) & 0x80000000

  let data = {
    dictionary: {},
    pos: 0,
    buffer: buf.slice(4)
  }

  for (let index = 0; index < nbEntries; index++) {
    const decodedKey = await genericDecoder(data.buffer)
    data.pos += decodedKey.length + 4 // 4 type length
    let nextBuffer = data.buffer.slice(decodedKey.length + 4)

    const decodedValue = await genericDecoder(nextBuffer)
    data.pos += decodedValue.length + 4 // 4 type length
    data.dictionary[decodedKey.value] = decodedValue.value
    data.buffer = nextBuffer.slice(decodedValue.length + 4)
  }

  return {
    value: data.dictionary,
    length: data.pos + 4 // 4 type length
  }
}

module.exports = {
  decode,
  type: DICTIONARY
}
