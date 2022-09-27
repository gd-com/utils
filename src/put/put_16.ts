/**
 * Encode Int 16
 * @param value
 * @returns {Buffer}
 */
export function put16 (value: number): Buffer {
  const newBuffer = Buffer.allocUnsafe(2)
  newBuffer.writeInt16LE(value, 0)
  return newBuffer
}
