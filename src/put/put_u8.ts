/**
 * Encode Unsigned Int 8
 * @param value
 * @returns {Buffer}
 */
export function putU8(value: number): Buffer {
  const newBuffer = Buffer.allocUnsafe(1);
  newBuffer.writeUInt8(value, 0);
  return newBuffer;
}
