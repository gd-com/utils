const Long = require('long')

async function put64 (value, buffer = null) {
  const newBuffer = Buffer.from(Long.fromString(value.toString()).toBytesLE())

  if (buffer != null) {
    return Buffer.concat([buffer, newBuffer], buffer.length + newBuffer.length)
  }
  return newBuffer
}

module.exports = put64
