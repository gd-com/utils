const { VECTOR3_ARRAY } = require('../../constants')
const vector3 = require('./vector3')

/**
 * Decode vector3Array
 * @param genericDecoder
 * @param buf
 * @param flag
 * @returns {Object}
 */
function decode (genericDecoder, buf, flag) {
  const nbEntries = buf.readUInt32LE(0)

  // start at 4 cause of nbEntries
  let data = {
    array: [],
    buffer: buf.slice(4),
    pos: 4
  }

  for (let index = 0; index < nbEntries; index++) {
    const decodedValue = vector3.decode(genericDecoder, data.buffer)
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
  decode,
  type: VECTOR3_ARRAY
}
