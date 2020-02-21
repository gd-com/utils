/**
 * Decode Unsigned Int 8
 * @param buffer {Buffer}
 * @param offset {Number}
 * @returns {{value: Number, length: Number}}
 */
function getU8 (buffer, offset = 0) {
  return {
    value: buffer.readUInt8(offset),
    length: 1
  }
}

module.exports = getU8
