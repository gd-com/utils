const Transform = require('stream').Transform

class StreamTcp extends Transform {
  _transform (chunk, enc, done) {
    let buffer = chunk
    while (buffer.length > 0) {
      const length = buffer.readUInt16LE(0)

      const bufferSplitted = buffer.slice(4, length + 4) // 4 cause the length bytes is in buffer
      buffer = buffer.slice(length + 4, buffer.length) // 4 cause the length bytes is in buffer

      this.push(bufferSplitted)
    }
    done()
  }
}

module.exports = StreamTcp
