import {IGetReturn} from "../../types/IGetReturn";
import {GodotQuat} from "../../types/GodotQuat";

/**
 * Decode Quat
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Object, length: Number}}
 */
export function getVarQuat (genericDecoder, buf): IGetReturn<GodotQuat> {
  return {
    value: new GodotQuat(
      buf.readFloatLE(0),
      buf.readFloatLE(4),
      buf.readFloatLE(8),
      buf.readFloatLE(12)
    ),
    length: 16
  }
}
