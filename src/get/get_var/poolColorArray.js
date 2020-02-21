const { POOL_COLOR_ARRAY } = require('../../constants')
const color = require('./color')

/**
 * Decode PoolColorArray
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Array, length: Number}}
 */
function getVarPoolColorArray (genericDecoder, buf) {
  const nbEntries = buf.readUInt32LE(0)

  // start at 4 cause of nbEntries
  const data = {
    array: [],
    buffer: buf.slice(4),
    pos: 4
  }

  for (let index = 0; index < nbEntries; index++) {
    const decodedValue = color.decode(genericDecoder, data.buffer)
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
  decode: getVarPoolColorArray,
  type: POOL_COLOR_ARRAY
}
