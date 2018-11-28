const { INTEGER } = require('../../constants')
const putU16 = require('../put_u16')
const put32 = require('../put_32')

/**
 * Encode Integer
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */
async function encode (value) {
  let buf = await putU16(INTEGER)
  buf = await putU16(0, buf)
  buf = await put32(value, buf)

  // TODO x64

  return buf
}

module.exports = {
  encode: (prepare, value) => encode(value),
  type: (typeName, value) => typeName === 'number' && Number.isInteger(value)
}
