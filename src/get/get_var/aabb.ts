import {IGetReturn} from "../../types/IGetReturn";
import {GodotAabb} from "../../types/GodotAabb";
import {GodotVector3} from "../../types/GodotVector3";

/**
 * Decode AABB
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: AABB, length: Number}}
 */
export function getVarAABB (genericDecoder, buf): IGetReturn<GodotAabb> {
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