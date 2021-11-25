import { TYPE } from '../../constants'
import { putU32 } from '../put_u32'
import { putFloat } from '../put_float'

/**
 * Encode Color
 * @param value
 * @returns {Buffer}
 */
function subPutVarColor (value) {
  const type = putU32(TYPE.COLOR)
  const r = putFloat(value.r)
  const g = putFloat(value.g)
  const b = putFloat(value.b)
  const a = putFloat(value.a)
  return Buffer.concat([type, r, g, b, a])
}

export const putVarColor = (prepare, value) => subPutVarColor(value)