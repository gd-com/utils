function getDouble (buffer, offset = 0) {
  return {
    value: buffer.readDoubleLE(offset),
    length: 8
  }
}

module.exports = getDouble
