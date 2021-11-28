/**
 * Decode color
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Object, length: Number}}
 */
import {GodotColor} from "../../types/GodotColor";
import {IGetReturn} from "../../types/IGetReturn";

export function getVarColor (genericDecoder, buf): IGetReturn<GodotColor> {
  return {
    value: new GodotColor(
      buf.readFloatLE(0),
      buf.readFloatLE(4),
      buf.readFloatLE(8),
      buf.readFloatLE(12)
    ),
    length: 16
  }
}