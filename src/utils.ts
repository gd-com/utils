import { Transform } from 'stream'

export class StreamTcp extends Transform {
  private _buffer: Buffer;

  constructor(opts) {
    super({
      ...opts,
      objectMode: true,
    })
    this._buffer = Buffer.from([])
  }

  _transform(chunk, enc, done) {
    this._buffer = Buffer.concat([this._buffer, chunk])

    while (this._buffer.length >= 4) {
      let _length = this._buffer.readUInt16LE(0)

      if (this._buffer.length >= (_length + 4)) {
        this.push(this._buffer.slice(4, _length + 4))
        this._buffer = this._buffer.slice(_length + 4)
      } else {
        break;
      }
    }

    done()
  }
}

export const prefixWithLength = (buffer: Buffer) => {
  const lengthBuffer = Buffer.alloc(4)
  lengthBuffer.writeUInt32LE(buffer.length, 0)
  return  Buffer.concat([lengthBuffer, buffer])
}