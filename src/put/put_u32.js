function putU32 (value, buffer = null) {
  let newBuffer = Buffer.allocUnsafe(4)
  newBuffer.writeUInt32LE(value, 0)

  if (buffer != null) {
    return Promise.resolve(Buffer.concat([buffer, newBuffer], buffer.length + newBuffer.length))
  } else {
    return Promise.resolve(newBuffer)
  }
}

module.exports = putU32
