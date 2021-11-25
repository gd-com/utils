/**
 * Encode Unsigned Int 16
 * @param value
 * @returns {Buffer}
 */
export function putU16 (value) {
  const newBuffer = Buffer.allocUnsafe(2)
  newBuffer.writeUInt16LE(value, 0)
  return newBuffer
}
