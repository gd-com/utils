const { INTEGER } = require('../../constants')
const putU16 = require('../put_u16')
const put32 = require('../put_32')

/**
 * Encode Integer
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */
function encode (value) {
  let buf = putU16(INTEGER)
  buf = putU16(0, buf)
  buf = put32(value, buf)

  // TODO x64

  return Promise.resolve({
    value: buf,
    length: buf.length
  })
}

module.exports = {
  encode: (prepare, value) => encode(value),
  type: (typeName, value) => typeName === 'number' && Number.isInteger(value)
}
