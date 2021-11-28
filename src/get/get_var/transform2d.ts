/**
 * Decode Transform2d
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Object, length: Number}}
 */
import {IGetReturn} from "../../types/IGetReturn";
import {GodotTransform2D} from "../../types/GodotTransform2D";
import {GodotVector2} from "../../types/GodotVector2";

export function getVarTransform2d (genericDecoder, buf): IGetReturn<GodotTransform2D> {
  return {
    value: new GodotTransform2D(
      new GodotVector2(
        buf.readFloatLE(0),
        buf.readFloatLE(4)
      ),
      new GodotVector2(
        buf.readFloatLE(8),
        buf.readFloatLE(12)
      ),
      new GodotVector2(
        buf.readFloatLE(16),
        buf.readFloatLE(20)
      ),
    ),
    length: 24
  }
}