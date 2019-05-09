function putString (value) {
  let len = Buffer.byteLength(value)
  let newBuffer = Buffer.allocUnsafe(4 + len)

  newBuffer.writeUInt32LE(len, 0)
  newBuffer.write(value, 4)
  return newBuffer
}

module.exports = putString
