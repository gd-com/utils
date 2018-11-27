function get16 (buffer, offset = 0) {
  return buffer.readInt16LE(offset)
}

module.exports = get16
