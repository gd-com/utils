function putDouble (value) {
  let newBuffer = Buffer.allocUnsafe(8)
  newBuffer.writeDoubleLE(value, 0)
  return newBuffer
}

module.exports = putDouble
