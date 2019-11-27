function putString (value) {
  const len = Buffer.byteLength(value)
  const newBuffer = Buffer.allocUnsafe(4 + len)

  newBuffer.writeUInt32LE(len, 0)
  newBuffer.write(value, 4)
  return newBuffer
}

module.exports = putString
