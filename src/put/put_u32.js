/**
 * Encode Unsigned Int 32
 * @param value
 * @returns {Buffer}
 */
function putU32 (value) {
  const newBuffer = Buffer.allocUnsafe(4)
  newBuffer.writeUInt32LE(value, 0)
  return newBuffer
}

module.exports = putU32
