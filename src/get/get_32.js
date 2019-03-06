function get32 (buffer, offset = 0) {
  return {
    value: buffer.readInt32LE(offset),
    length: 4
  }
}

module.exports = get32
