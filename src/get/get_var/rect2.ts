/**
 * Decode Rect2
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Object, length: Number}}
 */
export function getVarRect2 (genericDecoder, buf) {
  return {
    value: {
      x_coordinate: buf.readFloatLE(0),
      y_coordinate: buf.readFloatLE(4),
      x_size: buf.readFloatLE(8),
      y_size: buf.readFloatLE(12)
    },
    length: 16
  }
}