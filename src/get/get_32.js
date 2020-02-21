/**
 * Decode Int 32
 * @param buffer {Buffer}
 * @param offset {Number}
 * @returns {{value: Number, length: Number}}
 */
function get32 (buffer, offset = 0) {
  return {
    value: buffer.readInt32LE(offset),
    length: 4
  }
}

module.exports = get32
