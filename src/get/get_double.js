/**
 * Decode Double
 * @param buffer {Buffer}
 * @param offset {Number}
 * @returns {{value: Number, length: Number}}
 */
function getDouble (buffer, offset = 0) {
  return {
    value: buffer.readDoubleLE(offset),
    length: 8
  }
}

module.exports = getDouble
