import { TYPE } from '../../constants'
import { putU32 } from '../put_u32'
import { putFloat } from '../put_float'
import {GodotPlane} from "../../types";

/**
 * Encode Plane
 * @param value
 * @returns {Buffer}
 */
function subPutVarPlane (value: GodotPlane): Buffer {
  const type = putU32(TYPE.PLANE)
  const x = putFloat(value.x)
  const y = putFloat(value.y)
  const z = putFloat(value.z)
  const distance = putFloat(value.distance)
  return Buffer.concat([type, x, y, z, distance])
}

export const putVarPlane = (prepare, value: GodotPlane): Buffer => subPutVarPlane(value)