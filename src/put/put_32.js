function put32 (value) {
  const newBuffer = Buffer.allocUnsafe(4)
  newBuffer.writeInt32LE(value, 0)
  return newBuffer
}

module.exports = put32
