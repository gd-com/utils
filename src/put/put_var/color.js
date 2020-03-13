const { COLOR } = require('../../constants')
const putU32 = require('../put_u32')
const putFloat = require('../put_float')

/**
 * Encode Color
 * @param value
 * @returns {Buffer}
 */
function putVarColor (value) {
  const type = putU32(COLOR)
  const r = putFloat(value.r)
  const g = putFloat(value.g)
  const b = putFloat(value.b)
  const a = putFloat(value.a)
  return Buffer.concat([type, r, g, b, a])
}

module.exports = {
  encode: (prepare, value) => putVarColor(value),
  type: (typeName, value) => typeName === COLOR
}
