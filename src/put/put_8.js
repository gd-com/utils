function put8 (value) {
  const newBuffer = Buffer.allocUnsafe(1)
  newBuffer.writeInt8(value, 0)
  return newBuffer
}

module.exports = put8
