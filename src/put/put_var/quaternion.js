const { QUATERNION } = require('../../constants')
const putU32 = require('../put_u32')
const putFloat = require('../put_float')

/**
 * Encode Quaternion
 * @param value
 * @returns {Buffer}
 */
function putVarQuaternion (value) {
  const type = putU32(QUATERNION)
  const x = putFloat(value.x)
  const y = putFloat(value.y)
  const z = putFloat(value.z)
  const w = putFloat(value.w)
  return Buffer.concat([type, x, y, z, w])
}

module.exports = {
  encode: (prepare, value) => putVarQuaternion(value),
  type: (typeName, value) => typeName === QUATERNION
}
