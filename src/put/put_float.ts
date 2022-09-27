/**
 * Encode Float
 * @param value
 * @returns {Buffer}
 */
export function putFloat (value: number): Buffer {
  const newBuffer = Buffer.allocUnsafe(4)
  newBuffer.writeFloatLE(value, 0)
  return newBuffer
}
