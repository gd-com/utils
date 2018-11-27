function putFloat (value, buffer = null) {
  let newBuffer = Buffer.allocUnsafe(4)
  newBuffer.writeFloatLE(value, 0)

  if (buffer != null) {
    return Buffer.concat([buffer, newBuffer], buffer.length + newBuffer.length)
  } else {
    return newBuffer
  }
}

module.exports = putFloat
