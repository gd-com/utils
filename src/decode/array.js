const { ARRAY } = require('../constants')

/**
 * Decode Array
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, buf) {
  const nbEntries = buf.readUInt16LE(0) & 0x7FFFFFFF
  // const shared = !!buf.readUInt16LE(0) & 0x80000000

  // start at 4 cause of nbEntries
  let promise = Promise.resolve({
    array: [],
    buffer: buf.slice(4),
    pos: 4
  })

  for (let index = 0; index < nbEntries; index++) {
    promise = promise.then(
      ({ array, buffer, pos }) => genericDecoder(buffer)
        .then((decodedValue) => {
          array.push(decodedValue.value)
          buffer = buffer.slice(decodedValue.length + 4)
          pos += decodedValue.length + 4
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
  type: ARRAY
}
