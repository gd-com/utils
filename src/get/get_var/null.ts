/**
 * Decode null
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Null, length: Number}}
 */
export function getVarNull (genericDecoder, buf) {
  return {
    value: null,
    length: 0
  }
}