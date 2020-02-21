/**
 * Decode Unsigned Int 32
 * @param buffer {Buffer}
 * @param offset {Number}
 * @returns {{value: Number, length: Number}}
 */
function getU32 (buffer, offset = 0) {
  return {
    value: buffer.readUInt32LE(offset),
    length: 4
  }
}

module.exports = getU32
