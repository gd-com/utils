const { BOOL } = require('../../constants')
const putU32 = require('../put_u32')

/**
 * Encode Boolean
 * @param value
 * @returns {Buffer}
 */
function putVarBool (value) {
  const type = putU32(BOOL)
  const data = putU32(value ? 1 : 0)
  return Buffer.concat([type, data])
}

module.exports = {
  encode: (prepare, value) => putVarBool(value),
  type: (typeName, value) => typeName === 'boolean'
}
