async function getDouble (buffer, offset = 0) {
  return buffer.readDoubleLE(offset)
}

module.exports = getDouble
