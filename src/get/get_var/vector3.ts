/**
 * Decode Vector3
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Object, length: Number}}
 */
export function getVarVector3 (genericDecoder, buf) {
  return {
    value: {
      x: buf.readFloatLE(0),
      y: buf.readFloatLE(4),
      z: buf.readFloatLE(8)
    },
    length: 12
  }
}