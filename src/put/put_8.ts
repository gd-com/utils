/**
 * Encode Int 8
 * @param value
 * @returns {Buffer}
 */
export function put8(value: number): Buffer {
  const newBuffer = Buffer.allocUnsafe(1);
  newBuffer.writeInt8(value, 0);
  return newBuffer;
}
