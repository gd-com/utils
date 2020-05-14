const { POOL_BYTE_ARRAY } = require('../../constants')
const putU32 = require('../put_u32')

function putBuffer (value) {
  const len = value.byteLength
  const pad = len % 4 === 0 ? 0 : 4 - len % 4
  const newBuffer = Buffer.allocUnsafe(4 + len + pad)

  newBuffer.writeUInt32LE(len, 0)
  value.copy(newBuffer, 4)

  if (pad !== 0) {
    const pos = 4 + len

    for (let i = 0; i < pad; i++) {
      newBuffer.write('\0', i + pos)
    }
  }
  return newBuffer
}

/**
 * Encode PoolByteArray
 * @param value
 * @returns {Buffer}
 */
function putVarPoolByteArray (value) {
  const type = putU32(POOL_BYTE_ARRAY)
  const data = putBuffer(value)
  return Buffer.concat([type, data])
}

module.exports = {
  encode: (prepare, value) => putVarPoolByteArray(value),
  type: (typeName, value) => typeName === 'buffer' || typeName === POOL_BYTE_ARRAY
}
