const { DICTIONARY } = require('../../constants')

/**
 * Decode Dictionnary
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, buf) {
  const nbEntries = buf.readUInt32LE(0) & 0x7FFFFFFF
  // const shared = !!buf.readUInt32LE(0) & 0x80000000

  let data = {
    dictionary: {},
    pos: 0,
    buffer: buf.slice(4)
  }

  for (let index = 0; index < nbEntries; index++) {
    const decodedKey = genericDecoder(data.buffer)
    data.pos += decodedKey.length + 4 // 4 type length
    const nextBuffer = data.buffer.slice(decodedKey.length + 4)

    const decodedValue = genericDecoder(nextBuffer)
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
