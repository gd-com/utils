import {IGetReturn, GodotNull} from "../../types";

/**
 * Decode null
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Null, length: Number}}
 */
export function getVarNull (genericDecoder, buf: Buffer): IGetReturn<GodotNull> {
  return {
    value: null,
    length: 0
  }
}