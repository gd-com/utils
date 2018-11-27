function putDouble (value, buffer = null) {
  let newBuffer = Buffer.allocUnsafe(8)
  newBuffer.writeDoubleLE(value, 0)

  if (buffer != null) {
    return Promise.resolve(Buffer.concat([buffer, newBuffer], buffer.length + newBuffer.length))
  } else {
    return Promise.resolve(newBuffer)
  }
}

module.exports = putDouble
