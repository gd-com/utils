const { POOL_INT_ARRAY } = require('../../constants')
const integer = require('./integer')

/**
 * Decode PoolIntArray
 * @param genericDecoder
 * @param buf {Buffer}
 * @param flag
 * @returns {{value: Array, length: Number}}
 */
function getVarPoolIntArray (genericDecoder, buf, flag) {
  const nbEntries = buf.readUInt32LE(0)

  // start at 4 cause of nbEntries
  const data = {
    array: [],
    buffer: buf.slice(4),
    pos: 4
  }

  for (let index = 0; index < nbEntries; index++) {
    const decodedValue = integer.decode(genericDecoder, data.buffer, flag)
    data.array.push(decodedValue.value)
    data.buffer = data.buffer.slice(decodedValue.length)
    data.pos += decodedValue.length
  }

  return {
    value: data.array,
    length: data.pos
  }
}

module.exports = {
  decode: getVarPoolIntArray,
  type: POOL_INT_ARRAY
}
