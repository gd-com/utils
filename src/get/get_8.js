function get8 (buffer, offset = 0) {
  return {
    value: buffer.readInt8(offset),
    length: 1
  }
}

module.exports = get8
