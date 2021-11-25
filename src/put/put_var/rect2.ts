import { TYPE } from '../../constants'
import { putU32 } from '../put_u32'
import { putFloat } from '../put_float'

/**
 * Encode Rect2
 * @param value
 * @returns {Buffer}
 */
function subPutVarRect2 (value) {
  const type = putU32(TYPE.RECT2)
  const coordinateX = putFloat(value.x_coordinate)
  const coordinateY = putFloat(value.y_coordinate)
  const sizeX = putFloat(value.x_size)
  const sizeY = putFloat(value.y_size)
  return Buffer.concat([type, coordinateX, coordinateY, sizeX, sizeY])
}

export const putVarRect2 = (prepare, value) => subPutVarRect2(value)