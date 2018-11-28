const { BOOL } = require('../../constants')
const putU32 = require('../put_u32')

/**
 * Encode Boolean
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */
async function encode (value) {
  let buf = await putU32(BOOL)
  buf = await putU32(value ? 1 : 0, buf)

  return Promise.resolve(buf)
}

module.exports = {
  encode: (prepare, value) => encode(value),
  type: (typeName, value) => typeName === 'boolean'
}
