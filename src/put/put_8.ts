/**
 * Encode Int 8
 * @param value
 * @returns {Buffer}
 */
export function put8 (value) {
  const newBuffer = Buffer.allocUnsafe(1)
  newBuffer.writeInt8(value, 0)
  return newBuffer
}
