const { AABB } = require('../../constants')
const putU32 = require('../put_u32')
const putFloat = require('../put_float')

/**
 * Encode Vector3
 * @param value
 * @returns {Buffer}
 */
function putVarAABB (value) {
  const type = putU32(AABB)
  const xCoordinate = putFloat(value.x_coordinate)
  const yCoordinate = putFloat(value.y_coordinate)
  const zCoordinate = putFloat(value.z_coordinate)
  const xSize = putFloat(value.x_size)
  const ySize = putFloat(value.y_size)
  const zSize = putFloat(value.z_size)
  return Buffer.concat([type, xCoordinate, yCoordinate, zCoordinate, xSize, ySize, zSize])
}

module.exports = {
  encode: (prepare, value) => putVarAABB(value),
  type: (typeName, value) => typeName === AABB
}
