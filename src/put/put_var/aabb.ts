import { TYPE } from '../../constants'
import { putU32 } from '../put_u32'
import { putFloat } from '../put_float'

/**
 * Encode Vector3
 * @param value
 * @returns {Buffer}
 */
function subPutVarAABB(value) {
  const type = putU32(TYPE.AABB)
  const xCoordinate = putFloat(value.x_coordinate)
  const yCoordinate = putFloat(value.y_coordinate)
  const zCoordinate = putFloat(value.z_coordinate)
  const xSize = putFloat(value.x_size)
  const ySize = putFloat(value.y_size)
  const zSize = putFloat(value.z_size)
  return Buffer.concat([type, xCoordinate, yCoordinate, zCoordinate, xSize, ySize, zSize])
}

export const putVarAABB = (prepare, value) => subPutVarAABB(value)
