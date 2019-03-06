function putFloat (value) {
  let newBuffer = Buffer.allocUnsafe(4)
  newBuffer.writeFloatLE(value, 0)
  return newBuffer
}

module.exports = putFloat
