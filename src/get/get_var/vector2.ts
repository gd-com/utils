/**
 * Decode Vector2
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Object, length: Number}}
 */
import {IGetReturn} from "../../types/IGetReturn";
import {GodotVector2} from "../../types/GodotVector2";

export function getVarVector2 (genericDecoder, buf): IGetReturn<GodotVector2> {
  return {
    value: new GodotVector2(
      buf.readFloatLE(0),
      buf.readFloatLE(4)
    ),
    length: 8
  }
}