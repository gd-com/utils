/**
 * Decode Transform2d
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Object, length: Number}}
 */
export function getVarTransform2d (genericDecoder, buf) {
  return {
    value: [
      [
        buf.readFloatLE(0),
        buf.readFloatLE(4)
      ], [
        buf.readFloatLE(8),
        buf.readFloatLE(12)
      ], [
        buf.readFloatLE(16),
        buf.readFloatLE(20)
      ]
    ],
    length: 24
  }
}