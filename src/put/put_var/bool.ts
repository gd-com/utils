import { TYPE } from '../../constants'
import { putU32 } from '../put_u32'

/**
 * Encode Boolean
 * @param value
 * @returns {Buffer}
 */
function subPutVarBool (value: boolean): Buffer {
  const type = putU32(TYPE.BOOL)
  const data = putU32(value ? 1 : 0)
  return Buffer.concat([type, data])
}

export const putVarBool = (prepare, value: boolean): Buffer => subPutVarBool(value)