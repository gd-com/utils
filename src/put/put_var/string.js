const { STRING } = require('../../constants')
const putU32 = require('../put_u32')
const putString = require('../put_string')

/**
 * Encode string
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */
async function encode (value) {
  let buf = await putU32(STRING)
  buf = await putString(value, buf)
  return Promise.resolve({
    value: buf,
    length: buf.length
  })
}

module.exports = {
  encode: (prepare, value) => encode(value),
  type: (typeName, value) => typeName === 'string'
}
