const getU32 = require('./get_u32')

function getString (buffer, offset = 0) {
  const len = getU32(buffer, offset)
  return buffer.toString('utf8', offset + 4, offset + 4 + len).replace('\u0000', '')
}

module.exports = getString
