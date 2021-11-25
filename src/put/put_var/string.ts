import { TYPE } from '../../constants'
import { putU32 } from '../put_u32'

function putString (value) {
  const len = Buffer.byteLength(value)
  const pad = len % 4 === 0 ? 0 : 4 - len % 4
  const newBuffer = Buffer.allocUnsafe(4 + len + pad)

  newBuffer.writeUInt32LE(len, 0)
  newBuffer.write(value, 4)
  if (pad !== 0) {
    const pos = 4 + len

    for (let i = 0; i < pad; i++) {
      newBuffer.write('\0', i + pos)
    }
  }
  return newBuffer
}

/**
 * Encode string
 * @param value
 * @returns {Buffer}
 */
function subPutVarString(value) {
  const type = putU32(TYPE.STRING)
  const data = putString(value)
  return Buffer.concat([type, data])
}

export const putVarString = (prepare, value) => subPutVarString(value);