const { DICTIONARY } = require('../../constants')
const getU32 = require('../get_u32')

/**
 * Decode Dictionnary
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, buf) {
  const nbEntries = getU32(buf, 0) & 0x7FFFFFFF
  // const shared = !!getU32(buf, 0) & 0x80000000

  let promise = Promise.resolve({
    dictionary: {},
    pos: 0,
    buffer: buf.slice(4)
  })

  for (let index = 0; index < nbEntries; index++) {
    promise = promise.then(({ dictionary, pos, buffer }) => genericDecoder(buffer)
      .then((decodedKey) => {
        pos += decodedKey.length + 4 // 4 type length
        let nextBuffer = buffer.slice(decodedKey.length + 4)
        return genericDecoder(nextBuffer)
          .then((decodedValue) => {
            pos += decodedValue.length + 4 // 4 type length
            dictionary[decodedKey.value] = decodedValue.value
            buffer = nextBuffer.slice(decodedValue.length + 4)
            return { dictionary, pos, buffer }
          })
      })
    )
  }

  return promise.then(({ dictionary, pos }) => {
    return {
      value: dictionary,
      length: pos + 4 // 4 type length
    }
  })
}

module.exports = {
  decode,
  type: DICTIONARY
}
