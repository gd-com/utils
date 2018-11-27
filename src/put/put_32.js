function put32 (value, buffer = null) {
  let newBuffer = Buffer.allocUnsafe(4)
  newBuffer.writeInt32LE(value, 0)

  if (buffer != null) {
    return Promise.resolve(Buffer.concat([buffer, newBuffer], buffer.length + newBuffer.length))
  } else {
    return Promise.resolve(newBuffer)
  }
}

module.exports = put32
