const { POOL_VECTOR2_ARRAY } = require('../../constants')
const vector2 = require('./vector2')

/**
 * Decode PoolVector2Array
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Array, length: Number}}
 */
function getVarPoolVector2Array (genericDecoder, buf) {
  const nbEntries = buf.readUInt32LE(0)

  // start at 4 cause of nbEntries
  const data = {
    array: [],
    buffer: buf.slice(4),
    pos: 4
  }

  for (let index = 0; index < nbEntries; index++) {
    const decodedValue = vector2.decode(genericDecoder, data.buffer)
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
  decode: getVarPoolVector2Array,
  type: POOL_VECTOR2_ARRAY
}
