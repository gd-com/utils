const Long = require('long')

async function put64 (value, buffer = null) {
  const newBuffer = Long.fromNumber(value).toBytesLE()

  if (buffer != null) {
    return Buffer.concat([buffer, newBuffer], buffer.length + newBuffer.length)
  }
  return newBuffer
}

module.exports = put64
