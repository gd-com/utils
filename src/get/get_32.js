function get32 (buffer, offset = 0) {
  return Promise.resolve(buffer.readInt32LE(offset))
}

module.exports = get32
