function putU8 (value, buffer = null) {
  let newBuffer = Buffer.allocUnsafe(1)
  newBuffer.writeUInt8(value, 0)

  if (buffer != null) {
    return Promise.resolve(Buffer.concat([buffer, newBuffer], buffer.length + newBuffer.length))
  } else {
    return Promise.resolve(newBuffer)
  }
}

module.exports = putU8
