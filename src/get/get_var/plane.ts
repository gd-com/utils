/**
 * Decode Plane
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Object, length: Number}}
 */
export function getVarPlane (genericDecoder, buf) {
  return {
    value: {
      x: buf.readFloatLE(0),
      y: buf.readFloatLE(4),
      z: buf.readFloatLE(8),
      distance: buf.readFloatLE(12)
    },
    length: 16
  }
}