function putU32 (value, buffer = null) {
  let newBuffer = Buffer.allocUnsafe(4)
  newBuffer.writeUInt32LE(value, 0)

  if (buffer != null) {
    return Buffer.concat([buffer, newBuffer], buffer.length + newBuffer.length)
  } else {
    return newBuffer
  }
}

module.exports = putU32
