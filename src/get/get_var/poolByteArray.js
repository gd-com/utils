const { POOL_BYTE_ARRAY } = require('../../constants')
/**
 * Decode PoolByteArray
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Array, length: Number}}
 */
function getVarPoolByteArray (genericDecoder, buf) {
  const bufLength = buf.readUInt32LE(0)

  return {
    value: buf.slice(4, bufLength + 4),
    length: bufLength + 4 + 4 // type +  length
  }
}

module.exports = {
  decode: getVarPoolByteArray,
  type: POOL_BYTE_ARRAY
}
