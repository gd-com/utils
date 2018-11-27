function putDouble (value, buffer = null) {
  let newBuffer = Buffer.allocUnsafe(8)
  newBuffer.writeDoubleLE(value, 0)

  if (buffer != null) {
    return Buffer.concat([buffer, newBuffer], buffer.length + newBuffer.length)
  } else {
    return newBuffer
  }
}

module.exports = putDouble
