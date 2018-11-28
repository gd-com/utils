const Long = require('long')

async function getU64 (buffer, offset = 0) {
  return Long.fromBytesLE(buffer.slice(offset), true).toNumber()
}

module.exports = getU64
