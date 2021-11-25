/**
 * Decode Vector2
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Object, length: Number}}
 */
export function getVarVector2 (genericDecoder, buf) {
  return {
    value: {
      x: buf.readFloatLE(0),
      y: buf.readFloatLE(4)
    },
    length: 8
  }
}