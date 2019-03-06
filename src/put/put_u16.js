function putU16 (value) {
  let newBuffer = Buffer.allocUnsafe(2)
  newBuffer.writeUInt16LE(value, 0)
  return newBuffer
}

module.exports = putU16
