const { VECTOR3 } = require('../../constants')
const putU32 = require('../put_u32')
const putFloat = require('../put_float')

/**
 * Encode Vector3
 * @param value
 * @returns {Buffer}
 */
function putVarVector3 (value) {
  const type = putU32(VECTOR3)
  const x = putFloat(value.x)
  const y = putFloat(value.y)
  const z = putFloat(value.z)
  return Buffer.concat([type, x, y, z])
}

module.exports = {
  encode: (prepare, value) => putVarVector3(value),
  type: (typeName, value) => typeName === VECTOR3
}
