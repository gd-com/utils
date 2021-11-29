/**
 * Encode Double
 * @param value
 * @returns {Buffer}
 */
export function putDouble(value: number): Buffer {
  const newBuffer = Buffer.allocUnsafe(8);
  newBuffer.writeDoubleLE(value, 0);
  return newBuffer;
}
