async function getU32 (buffer, offset = 0) {
  return buffer.readUInt32LE(offset)
}

module.exports = getU32
