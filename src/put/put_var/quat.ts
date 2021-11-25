import { TYPE } from '../../constants'
import { putU32 } from '../put_u32'
import { putFloat } from '../put_float'

/**
 * Encode Quat
 * @param value
 * @returns {Buffer}
 */
function subPutVarQuat (value) {
  const type = putU32(TYPE.QUAT)
  const x = putFloat(value.x)
  const y = putFloat(value.y)
  const z = putFloat(value.z)
  const w = putFloat(value.w)
  return Buffer.concat([type, x, y, z, w])
}

export const putVarQuat = (prepare, value) => subPutVarQuat(value)