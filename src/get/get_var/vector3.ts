/**
 * Decode Vector3
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Object, length: Number}}
 */
import {IGetReturn} from "../../types/IGetReturn";
import {GodotVector3} from "../../types/GodotVector3";

export function getVarVector3 (genericDecoder, buf): IGetReturn<GodotVector3> {
  return {
    value: new GodotVector3(
      buf.readFloatLE(0),
      buf.readFloatLE(4),
      buf.readFloatLE(8)
    ),
    length: 12
  }
}