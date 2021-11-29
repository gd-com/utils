import {IGetReturn, GodotAabb, GodotVector3} from "../../types";

/**
 * Decode AABB
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: AABB, length: Number}}
 */
export function getVarAABB (genericDecoder, buf: Buffer): IGetReturn<GodotAabb> {
  return {
    value: new GodotAabb(
      new GodotVector3(
        buf.readFloatLE(0),
        buf.readFloatLE(4),
        buf.readFloatLE(8),
      ),
      new GodotVector3(
        buf.readFloatLE(12),
        buf.readFloatLE(16),
        buf.readFloatLE(20)
      ),
    ),
    length: 24
  }
}