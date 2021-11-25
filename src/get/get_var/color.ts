/**
 * Decode color
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Object, length: Number}}
 */
export function getVarColor (genericDecoder, buf) {
  return {
    value: {
      r: buf.readFloatLE(0),
      g: buf.readFloatLE(4),
      b: buf.readFloatLE(8),
      a: buf.readFloatLE(12)
    },
    length: 16
  }
}