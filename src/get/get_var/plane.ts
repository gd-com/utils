import {IGetReturn, GodotPlane} from "../../types";

/**
 * Decode Plane
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Object, length: Number}}
 */
export function getVarPlane (genericDecoder, buf: Buffer): IGetReturn<GodotPlane> {
  return {
    value: new GodotPlane(
      buf.readFloatLE(0),
      buf.readFloatLE(4),
      buf.readFloatLE(8),
      buf.readFloatLE(12)
    ),
    length: 16
  }
}