import {IGetReturn} from "../../types/IGetReturn";

/**
 * Decode boolean
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Boolean, length: Number}}
 */
export function getVarBool (genericDecoder: Array<any>, buf: Buffer): IGetReturn<boolean> {
  return {
    value: buf.readUInt32LE(0) === 1,
    length: 4
  }
}