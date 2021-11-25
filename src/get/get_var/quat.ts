/**
 * Decode Quat
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Object, length: Number}}
 */
export function getVarQuat (genericDecoder, buf) {
  return {
    value: {
      x: buf.readFloatLE(0),
      y: buf.readFloatLE(4),
      z: buf.readFloatLE(8),
      w: buf.readFloatLE(12)
    },
    length: 16
  }
}
