const { NULL } = require('../../constants')

/**
 * Encode Null
 * @returns {Buffer}
 */
function putVarNull () {
  const buf = Buffer.alloc(4)
  buf.writeUInt32LE(NULL, 0)
  return buf
}

module.exports = {
  encode: (prepare, value) => putVarNull(),
  type: (typeName, value) => typeName === 'null'
}
