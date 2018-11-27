function getU16 (buffer, offset = 0) {
  return buffer.readUInt16LE(offset)
}

module.exports = getU16
