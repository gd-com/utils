import { TYPE } from '../../constants'
import { putU32 } from '../put_u32'

function putBuffer (value: Buffer): Buffer {
  const len = value.byteLength
  const pad = len % 4 === 0 ? 0 : 4 - len % 4
  const newBuffer = Buffer.allocUnsafe(4 + len + pad)

  newBuffer.writeUInt32LE(len, 0)
  value.copy(newBuffer, 4)

  if (pad !== 0) {
    const pos = 4 + len

    for (let i = 0; i < pad; i++) {
      newBuffer.write('\0', i + pos)
    }
  }
  return newBuffer
}

/**
 * Encode PoolByteArray
 * @param value
 * @returns {Buffer}
 */
function subPutVarRawArray (value: Buffer): Buffer {
  const type = putU32(TYPE.RAW_ARRAY)
  const data = putBuffer(value)
  return Buffer.concat([type, data])
}

export const putVarRawArray = (prepare, value: Buffer): Buffer => subPutVarRawArray(value)
