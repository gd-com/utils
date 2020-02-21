const { VECTOR2 } = require('../../constants')
const putU32 = require('../put_u32')
const putFloat = require('../put_float')

/**
 * Encode Vector2
 * @param value
 * @returns {Buffer}
 */
function putVarVector2 (value) {
  const type = putU32(VECTOR2)
  const x = putFloat(value.x)
  const y = putFloat(value.y)
  return Buffer.concat([type, x, y])
}

module.exports = {
  encode: (prepare, value) => putVarVector2(value),
  type: (typeName, value) => typeName === VECTOR2
}
