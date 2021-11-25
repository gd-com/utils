import { TYPE } from '../../constants'
import { putU32 } from '../put_u32'
import { putFloat } from '../put_float'

/**
 * Encode Vector2
 * @param value
 * @returns {Buffer}
 */
function subPutVarVector2 (value) {
  const type = putU32(TYPE.VECTOR2)
  const x = putFloat(value.x)
  const y = putFloat(value.y)
  return Buffer.concat([type, x, y])
}

export const putVarVector2 = (prepare, value) => subPutVarVector2(value)