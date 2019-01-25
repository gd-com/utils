const { STRING } = require('../../constants')
const putU32 = require('../put_u32')
const putString = require('../put_string')

/**
 * Encode string
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */
async function encode (value) {
  let type = await putU32(STRING)
  let data = await putString(value)
  return Buffer.concat([type, data])
}

module.exports = {
  encode: (prepare, value) => encode(value),
  type: (typeName, value) => typeName === 'string'
}
