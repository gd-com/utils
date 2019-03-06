const { NULL } = require('../../constants')

/**
 * Encode Null
 * @returns {{value: Buffer, length: Number}}
 */
function encode () {
  let buf = Buffer.alloc(4)
  buf.writeUInt32LE(NULL, 0)
  return buf
}

module.exports = {
  encode: (prepare, value) => encode(),
  type: (typeName, value) => typeName === 'null'
}
