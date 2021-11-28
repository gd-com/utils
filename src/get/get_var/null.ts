import {IGetReturn} from "../../types/IGetReturn";
import {GodotNull} from "../../types/GodotNull";

/**
 * Decode null
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Null, length: Number}}
 */
export function getVarNull (genericDecoder, buf): IGetReturn<GodotNull> {
  return {
    value: null,
    length: 0
  }
}