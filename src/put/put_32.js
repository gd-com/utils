async function put32 (value, buffer = null) {
  let newBuffer = Buffer.allocUnsafe(4)
  newBuffer.writeInt32LE(value, 0)

  if (buffer != null) {
    return Buffer.concat([buffer, newBuffer], buffer.length + newBuffer.length)
  } else {
    return newBuffer
  }
}

module.exports = put32
