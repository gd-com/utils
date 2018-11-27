const { BOOL } = require('../../constants')
const putU32 = require('../put_u32')

/**
 * Encode Boolean
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */
function encode (value) {
  let buf = putU32(BOOL)
  buf = putU32(value ? 1 : 0, buf)

  return Promise.resolve({
    value: buf,
    length: buf.length
  })
}

module.exports = {
  encode: (prepare, value) => encode(value),
  type: (typeName, value) => typeName === 'boolean'
}
