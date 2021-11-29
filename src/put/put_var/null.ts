import { TYPE } from '../../constants'

/**
 * Encode Null
 * @returns {Buffer}
 */
export function subPutVarNull(): Buffer {
  const buf = Buffer.alloc(4)
  buf.writeUInt32LE(TYPE.NULL, 0)
  return buf
}

export const putVarNull = (): Buffer => subPutVarNull()