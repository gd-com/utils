function get16 (buffer, offset = 0) {
  return Promise.resolve(buffer.readInt16LE(offset))
}

module.exports = get16
