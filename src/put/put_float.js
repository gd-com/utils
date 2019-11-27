function putFloat (value) {
  const newBuffer = Buffer.allocUnsafe(4)
  newBuffer.writeFloatLE(value, 0)
  return newBuffer
}

module.exports = putFloat
