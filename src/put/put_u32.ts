/**
 * Encode Unsigned Int 32
 * @param value
 * @returns {Buffer}
 */
export function putU32(value: number): Buffer {
  const newBuffer = Buffer.allocUnsafe(4);
  newBuffer.writeUInt32LE(value, 0);
  return newBuffer;
}
