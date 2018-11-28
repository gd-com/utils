const { ARRAY } = require('../../constants')
const getU32 = require('../get_u32')

/**
 * Decode Array
 * @param genericDecoder
 * @param buf
 * @returns {Object}
 */
async function decode (genericDecoder, buf) {
  const nbEntries = await getU32(buf, 0) & 0x7FFFFFFF
  // const shared = await !!getU32(buf, 0) & 0x80000000

  // start at 4 cause of nbEntries
  let data = {
    array: [],
    buffer: buf.slice(4),
    pos: 4
  }

  for (let index = 0; index < nbEntries; index++) {
    const decodedValue = await genericDecoder(data.buffer)
    data.array.push(decodedValue.value)
    data.buffer = data.buffer.slice(decodedValue.length + 4)
    data.pos += decodedValue.length + 4
  }

  return {
    value: data.array,
    length: data.pos
  }
}

module.exports = {
  decode,
  type: ARRAY
}
