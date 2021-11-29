import {IGetReturn, GodotTransform2D, GodotVector2} from "../../types";

/**
 * Decode Transform2d
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Object, length: Number}}
 */
export function getVarTransform2d (genericDecoder, buf: Buffer): IGetReturn<GodotTransform2D> {
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