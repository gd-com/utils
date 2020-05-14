const { POOL_BYTE_ARRAY } = require('../../constants')
const putU32 = require('../put_u32')

/**
 * Encode Boolean
 * @param {Buffer} value
 * @returns {Buffer}
 */
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

function putVarBuffer (value) {
  const type = putU32(POOL_BYTE_ARRAY)
  const data = putBuffer(value)
  return Buffer.concat([type, data])
}

module.exports = {
  encode: (prepare, value) => putVarBuffer(value),
  type: (typeName, value) => typeName === 'buffer'
}

