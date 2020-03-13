/**
 * Decode Int 16
 * @param buffer {Buffer}
 * @param offset {Number}
 * @returns {{value: Number, length: Number}}
 */
function get16 (buffer, offset = 0) {
  return {
    value: buffer.readInt16LE(offset),
    length: 2
  }
}

module.exports = get16
