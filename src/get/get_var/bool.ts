import {IGetReturn} from "../../types/IGetReturn";
import {GodotBoolean} from "../../types/GodotBoolean";

/**
 * Decode boolean
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Boolean, length: Number}}
 */
export function getVarBool (genericDecoder: Array<any>, buf: Buffer): IGetReturn<GodotBoolean> {
  return {
    value: buf.readUInt32LE(0) === 1,
    length: 4
  }
}