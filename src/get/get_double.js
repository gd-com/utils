function getDouble (buffer, offset = 0) {
  return Promise.resolve(buffer.readDoubleLE(offset))
}

module.exports = getDouble
