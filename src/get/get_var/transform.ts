/**
 * Decode Transform
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Object, length: Number}}
 */
export function getVarTransform (genericDecoder, buf) {
  return {
    value: [
      [
        buf.readFloatLE(0),
        buf.readFloatLE(4),
        buf.readFloatLE(8)
      ], [
        buf.readFloatLE(12),
        buf.readFloatLE(16),
        buf.readFloatLE(20)
      ], [
        buf.readFloatLE(24),
        buf.readFloatLE(28),
        buf.readFloatLE(32)
      ], [
        buf.readFloatLE(36),
        buf.readFloatLE(40),
        buf.readFloatLE(44)
      ]
    ],
    length: 48
  }
}