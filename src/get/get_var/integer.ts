import Long from 'long'
import {IGetReturn} from "../../types/IGetReturn";
import {GodotFloat} from "../../types/GodotFloat";
import {GodotInteger} from "../../types/GodotInteger";

/**
 * Decode integer
 * @param genericDecoder
 * @param buf {Buffer}
 * @param flag
 * @returns {{value: Number, length: Number}}
 */
export function getVarInteger (genericDecoder, buf, flag = 0): IGetReturn<GodotInteger> {
  let result = null
  if (flag === 1) {
    result = {
      value: Long.fromBytesLE(buf.slice(0)).toNumber(),
      length: 8
    }
  } else {
    result = {
      value: buf.readInt32LE(0),
      length: 4
    }
  }

  return result
}