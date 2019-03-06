function putU32 (value) {
  let newBuffer = Buffer.allocUnsafe(4)
  newBuffer.writeUInt32LE(value, 0)
  return newBuffer
}

module.exports = putU32
