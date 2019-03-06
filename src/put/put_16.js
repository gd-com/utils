function put16 (value) {
  let newBuffer = Buffer.allocUnsafe(2)
  newBuffer.writeInt16LE(value, 0)
  return newBuffer
}

module.exports = put16
