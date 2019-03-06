function get16 (buffer, offset = 0) {
  return {
    value: buffer.readInt16LE(offset),
    length: 2
  }
}

module.exports = get16
