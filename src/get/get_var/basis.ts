import {IGetReturn} from "../../types/IGetReturn";
import {IGodotBasis} from "../../types/IGodotBasis";

/**
 * Decode BASIS
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Object, length: Number}}
 */
export function getVarBasis (genericDecoder, buf): IGetReturn<IGodotBasis> {
  return {
    value: {
      x: {
        x: buf.readFloatLE(buf, 0),
        y: buf.readFloatLE(buf, 4),
        z: buf.readFloatLE(buf, 8)
      },
      y: {
        x: buf.readFloatLE(buf, 12),
        y: buf.readFloatLE(buf, 16),
        z: buf.readFloatLE(buf, 20)

      },
      z: {
        x: buf.readFloatLE(buf, 24),
        y: buf.readFloatLE(buf, 28),
        z: buf.readFloatLE(buf, 32)
      }
    },
    length: 36
  }
}