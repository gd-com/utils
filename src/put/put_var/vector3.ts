import { TYPE } from '../../constants'
import { putU32 } from '../put_u32'
import { putFloat } from '../put_float'

/**
 * Encode Vector3
 * @param value
 * @returns {Buffer}
 */
function subPutVarVector3 (value) {
  const type = putU32(TYPE.VECTOR3)
  const x = putFloat(value.x)
  const y = putFloat(value.y)
  const z = putFloat(value.z)
  return Buffer.concat([type, x, y, z])
}

export const putVarVector3 = (prepare, value) => subPutVarVector3(value)