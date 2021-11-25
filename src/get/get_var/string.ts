/**
 * Decode String
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: String, length: Number}}
 */
export function getVarString (genericDecoder, buf) {
  const len = buf.readUInt32LE(0)
  const pad = len % 4 === 0 ? 0 : 4 - (len % 4)

  return {
    value: buf.toString('utf8', 4, 4 + len).replace('\u0000', ''),
    length: 4 + len + pad
  }
}