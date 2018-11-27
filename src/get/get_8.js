function get8 (buffer, offset = 0) {
  return Promise.resolve(buffer.readInt8(offset))
}

module.exports = get8
