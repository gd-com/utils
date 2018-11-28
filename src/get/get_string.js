const getU32 = require('./get_u32')

async function getString (buffer, offset = 0) {
  const len = await getU32(buffer, offset)
  return buffer.toString('utf8', offset + 4, offset + 4 + len).replace('\u0000', '')
}

module.exports = getString
