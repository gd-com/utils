import {IGetReturn} from "../../types/IGetReturn";
import {GodotBasis} from "../../types/GodotBasis";
import {GodotVector3} from "../../types/GodotVector3";

/**
 * Decode BASIS
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Object, length: Number}}
 */
export function getVarBasis (genericDecoder, buf): IGetReturn<GodotBasis> {

  const vector3x = new GodotVector3(buf.readFloatLE(buf, 0), buf.readFloatLE(buf, 4), buf.readFloatLE(buf, 8));
  const vector3y = new GodotVector3(buf.readFloatLE(buf, 12), buf.readFloatLE(buf, 16), buf.readFloatLE(buf, 20));
  const vector3z = new GodotVector3(buf.readFloatLE(buf, 24), buf.readFloatLE(buf, 28), buf.readFloatLE(buf, 32));

  return {
    value: new GodotBasis(vector3x, vector3y, vector3z),
    length: 36
  }
}