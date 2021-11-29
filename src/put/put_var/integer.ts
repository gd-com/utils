import { TYPE } from '../../constants'
import { putU16 } from '../put_u16'
import  { put32 } from '../put_32'

/**
 * Encode Integer
 * @param value
 * @returns {Buffer}
 */
export function subputVarInt(value: number): Buffer {
  const type = putU16(TYPE.INTEGER)
  const flag = putU16(0)
  const data = put32(value)

  // TODO x64

  return Buffer.concat([type, flag, data])
}

export const putVarInt = (prepare, value: number): Buffer => subputVarInt(value)