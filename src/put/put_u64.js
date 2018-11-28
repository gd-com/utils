const Long = require('long')

async function putU64 (value, buffer = null) {
  const newBuffer = Long.fromNumber(value, true).toBytesLE()

  if (buffer != null) {
    return Buffer.concat([buffer, newBuffer], buffer.length + newBuffer.length)
  }
  return newBuffer
}

module.exports = putU64
