function getU32 (buffer, offset = 0) {
  return Promise.resolve(buffer.readUInt32LE(offset))
}

module.exports = getU32
