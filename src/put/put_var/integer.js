const { INTEGER } = require('../../constants')
const putU16 = require('../put_u16')
const put32 = require('../put_32')

/**
 * Encode Integer
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */
async function encode (value) {
  let type = await putU16(INTEGER)
  let flag = await putU16(0)
  let data = await put32(value)

  // TODO x64

  return Buffer.concat([type, flag, data])
}

module.exports = {
  encode: (prepare, value) => encode(value),
  type: (typeName, value) => typeName === 'number' && Number.isInteger(value)
}
