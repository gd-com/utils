function put8 (value, buffer = null) {
  let newBuffer = Buffer.allocUnsafe(1)
  newBuffer.writeInt8(value, 0)

  if (buffer != null) {
    return Promise.resolve(Buffer.concat([buffer, newBuffer], buffer.length + newBuffer.length))
  } else {
    return Promise.resolve(newBuffer)
  }
}

module.exports = put8
