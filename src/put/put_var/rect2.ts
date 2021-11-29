import { TYPE } from '../../constants'
import { putU32 } from '../put_u32'
import { putFloat } from '../put_float'
import {GodotRect2} from "../../types";

/**
 * Encode Rect2
 * @param value
 * @returns {Buffer}
 */
function subPutVarRect2 (value: GodotRect2): Buffer {
  const type = putU32(TYPE.RECT2)
  const coordinateX = putFloat(value.coordinate.x)
  const coordinateY = putFloat(value.coordinate.y)
  const sizeX = putFloat(value.size.x)
  const sizeY = putFloat(value.size.y)
  return Buffer.concat([type, coordinateX, coordinateY, sizeX, sizeY])
}

export const putVarRect2 = (prepare, value: GodotRect2): Buffer => subPutVarRect2(value)