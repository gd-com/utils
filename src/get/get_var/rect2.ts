import {IGetReturn, GodotRect2, GodotVector2} from "../../types";

/**
 * Decode Rect2
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Object, length: Number}}
 */
export function getVarRect2 (genericDecoder, buf: Buffer): IGetReturn<GodotRect2> {
  return {
    value: new GodotRect2(
      new GodotVector2(buf.readFloatLE(0), buf.readFloatLE(4)),
      new GodotVector2(buf.readFloatLE(8),  buf.readFloatLE(12)),
    ),
    length: 16
  }
}