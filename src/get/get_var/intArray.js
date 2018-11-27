const { INT_ARRAY } = require('../../constants')
const integer = require('./integer')
const getU32 = require('../get_u32')

/**
 * Decode intArray
 * @param genericDecoder
 * @param buf
 * @param flag
 * @returns {Object}
 */
function decode (genericDecoder, buf, flag) {
  const nbEntries = getU32(buf, 0)

  // start at 4 cause of nbEntries
  let promise = Promise.resolve({
    array: [],
    buffer: buf.slice(4),
    pos: 4
  })

  for (let index = 0; index < nbEntries; index++) {
    promise = promise.then(
      ({ array, buffer, pos }) => integer.decode(genericDecoder, buffer, flag)
        .then((decodedValue) => {
          array.push(decodedValue.value)
          buffer = buffer.slice(decodedValue.length)
          pos += decodedValue.length
          return { array, buffer, pos }
        })
    )
  }

  return promise.then(({ array, pos }) => {
    return {
      value: array,
      length: pos
    }
  })
}

module.exports = {
  decode,
  type: INT_ARRAY
}
