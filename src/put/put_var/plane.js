const { PLANE } = require('../../constants')
const putU32 = require('../put_u32')
const putFloat = require('../put_float')

/**
 * Encode Plane
 * @param value
 * @returns {Buffer}
 */
function putVarPlane (value) {
  const type = putU32(PLANE)
  const x = putFloat(value.x)
  const y = putFloat(value.y)
  const z = putFloat(value.z)
  const distance = putFloat(value.distance)
  return Buffer.concat([type, x, y, z, distance])
}

module.exports = {
  encode: (prepare, value) => putVarPlane(value),
  type: (typeName, value) => typeName === PLANE
}
