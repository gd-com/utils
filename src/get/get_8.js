/**
 * Decode Int 8
 * @param {Buffer} buffer
 * @param {Number} offset
 * @returns {{value: Number, length: Number}}
 */
function get8 (buffer, offset = 0) {
  return {
    value: buffer.readInt8(offset),
    length: 1
  }
}

module.exports = get8
