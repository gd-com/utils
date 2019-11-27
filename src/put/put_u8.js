function putU8 (value) {
  const newBuffer = Buffer.allocUnsafe(1)
  newBuffer.writeUInt8(value, 0)
  return newBuffer
}

module.exports = putU8
