import {IGetReturn, GodotBasis, GodotVector3} from "../../types";

/**
 * Decode BASIS
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Object, length: Number}}
 */
export function getVarBasis (genericDecoder, buf: Buffer): IGetReturn<GodotBasis> {

  const vector3x = new GodotVector3(buf.readFloatLE(0), buf.readFloatLE(4), buf.readFloatLE(8));
  const vector3y = new GodotVector3(buf.readFloatLE(12), buf.readFloatLE(16), buf.readFloatLE(20));
  const vector3z = new GodotVector3(buf.readFloatLE(24), buf.readFloatLE(28), buf.readFloatLE(32));

  return {
    value: new GodotBasis(vector3x, vector3y, vector3z),
    length: 36
  }
}