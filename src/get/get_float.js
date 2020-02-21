/**
 * Decode Float
 * @param buffer {Buffer}
 * @param offset {Number}
 * @returns {{value: Number, length: Number}}
 */
function getFloat (buffer, offset = 0) {
  return {
    value: buffer.readFloatLE(offset),
    length: 4
  }
}

module.exports = getFloat
