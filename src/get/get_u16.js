/**
 * Decode Unsigned Int 16
 * @param buffer {Buffer}
 * @param offset {Number}
 * @returns {{value: Number, length: Number}}
 */
function getU16 (buffer, offset = 0) {
  return {
    value: buffer.readUInt16LE(offset),
    length: 2
  }
}

module.exports = getU16
