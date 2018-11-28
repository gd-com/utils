async function get32 (buffer, offset = 0) {
  return buffer.readInt32LE(offset)
}

module.exports = get32
