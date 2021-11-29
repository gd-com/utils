import { TYPE } from '../../constants'
import { putU32 } from '../put_u32'
import { putFloat } from '../put_float'
import { GodotAabb } from "../../types";

/**
 * Encode Vector3
 * @param value
 * @returns {Buffer}
 */
function subPutVarAABB(value: GodotAabb): Buffer {
  const type = putU32(TYPE.AABB)
  const xCoordinate = putFloat(value.coordinate.x)
  const yCoordinate = putFloat(value.coordinate.y)
  const zCoordinate = putFloat(value.coordinate.z)
  const xSize = putFloat(value.size.x)
  const ySize = putFloat(value.size.y)
  const zSize = putFloat(value.size.z)
  return Buffer.concat([type, xCoordinate, yCoordinate, zCoordinate, xSize, ySize, zSize])
}

export const putVarAABB = (prepare, value: GodotAabb): Buffer => subPutVarAABB(value)
