import { TYPE } from '../../constants'
import { putU16 } from '../put_u16'
import { putFloat } from '../put_float'

/**
 * Encode Float
 * @param value
 * @returns {Buffer}
 */
function subPutVarFloat (value) {
  // always encode real as double cf : marshalls.cpp L842
  // if (x64) { // TODO x64
  // /* eslint-enable */
  //   let buf = putU16(FLOAT)
  //   buf = putU16(1, buf) // flag 1 for double
  //   buf = putDouble(value, buf)
  //   return Promise.resolve({
  //     value: buf,
  //     length: buf.length
  //   })
  // }

  const type = putU16(TYPE.FLOAT)
  const flag = putU16(0) // flag  0 for float
  const data = putFloat(value)

  return Buffer.concat([type, flag, data])
}

export const putVarFloat = (prepare, value) => subPutVarFloat(value)