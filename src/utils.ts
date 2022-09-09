import { Transform } from 'stream'

export class StreamTcp extends Transform {
  private _buffer: Buffer;
  private _length: number | null;

  constructor(opts) {
    super({
      ...opts,
      objectMode: true,
    })
    this._buffer = Buffer.from([])
    this._length = null
  }

  _transform (chunk, enc, done) {
    if (this._buffer.length === this._length) {
      this.push(this._buffer)
      this._buffer = Buffer.from([])
      this._length = null
    }

    if (this._length === null) {
      this._length = chunk.readUInt16LE(0)
    } else {
      this._buffer = Buffer.concat([this._buffer, chunk], this._buffer.length + chunk.length)
    }

    done()
  }
}

export const prefixWithLength = (buffer: Buffer) => {
  const lengthBuffer = Buffer.alloc(4)
  lengthBuffer.writeUInt32LE(buffer.length, 0)
  return  Buffer.concat([lengthBuffer, buffer])
}