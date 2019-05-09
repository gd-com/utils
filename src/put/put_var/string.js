const { STRING } = require('../../constants')
const putU32 = require('../put_u32')

function putString (value) {
  let len = Buffer.byteLength(value)
  let pad = len % 4 === 0 ? 0 : 4 - len % 4
  let newBuffer = Buffer.allocUnsafe(4 + len + pad)

  newBuffer.writeUInt32LE(len, 0)
  newBuffer.write(value, 4)
  if (pad !== 0) {
    let pos = 4 + len

    for (let i = 0; i < pad; i++) {
      newBuffer.write('\0', i + pos)
    }
  }
  return newBuffer
}

/**
 * Encode string
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */
function encode (value) {
  let type = putU32(STRING)
  let data = putString(value)
  return Buffer.concat([type, data])
}

module.exports = {
  encode: (prepare, value) => encode(value),
  type: (typeName, value) => typeName === 'string'
}
