# ![GM-Com](./img/logo.png) @gd-com/utils

Binary serialization helper godot and nodejs !

Written with this [api](http://docs.godotengine.org/en/latest/tutorials/misc/binary_serialization_api.html)

## Requirements

- Godot 3.X
- NodeJS 10.14.0 LTS or greater

## How to install

`npm install --save @gd-com/utils`


##### For an example take a look *[@gd-com/examples](https://github.com/gd-com/examples)* !

```javascript
const gdCom = require('@gd-com/utils') // var { GdBuffer } = require('@gd-com/utils')

const test1 = gdCom.putVar(8)

const lengthBuffer = Buffer.alloc(4)
lengthBuffer.writeUInt32LE(test1.length, 0)

const finalBuffer = Buffer.concat([lengthBuffer, test1])

console.log(finalBuffer)

```
## Available from gdCom

### Encode and Decode

#### - getX
| Method | Return |
|-------------------------------|------------------------------|
| getVar(buffer, offset = 0) | Object {   value,   length } |
| get8(buffer, offset = 0) | Object {   value,   length } |
| get16(buffer, offset = 0) | Object {   value,   length } |
| get32(buffer, offset = 0) | Object {   value,   length } |
| get64(buffer, offset = 0) | Object {   value,   length } |
| getU8(buffer, offset = 0) | Object {   value,   length } |
| getU16(buffer, offset = 0) | Object {   value,   length } |
| getU32(buffer, offset = 0) | Object {   value,   length } |
| getU64(buffer, offset = 0) | Object {   value,   length } |
| getFloat(buffer, offset = 0) | Object {   value,   length } |
| getDouble(buffer, offset = 0) | Object {   value,   length } |
| getString(buffer, offset = 0) | Object {   value,   length } |

#### - putX
| Method | Return |
|-------------------------------|------------------------------|
| putVar(value, type) | Buffer |
| put8(value) | Buffer |
| put16(value) | Buffer |
| put32(value) | Buffer |
| put64(value) | Buffer |
| putU8(value) | Buffer |
| putU16(value) | Buffer |
| putU32(value) | Buffer |
| putU64(value) | Buffer |
| putFloat(value) | Buffer |
| putDouble(value) | Buffer |
| putString(value) | Buffer |

#### TYPE

| Name | Value |
|-------------------------------|------------------------------|
| NULL | 0 |
| BOOL | 1 |
| INTEGER | 2 |
| FLOAT | 3 |
| STRING | 4 |
| VECTOR2 | 5 |
| RECT2 | 6 |
| VECTOR3 | 7 |
| TRANSFORM2D | 8 |
| PLANE | 9 |
| QUATERNION | 10 |
| AABB | 11 |
| BASIS | 12 |
| TRANSFORM | 13 |
| COLOR | 14 |
| NODE_PATH | 15 |
| RID // unsupported | 16 |
| OBJECT // unsupported | 17 |
| DICTIONARY | 18 |
| ARRAY | 19 |
| POOL_BYTE_ARRAY | 20 |
| POOL_INT_ARRAY | 21 |
| POOL_REAL_ARRAY | 22 |
| POOL_STRING_ARRAY | 23 |
| POOL_VECTOR2_ARRAY | 24 |
| POOL_VECTOR3_ARRAY | 25 |
| POOL_COLOR_ARRAY | 26 |
| MAX | 27 |

### StreamTcp Splitter

```javascript
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
```

```javascript
const net = require('net')
const { putVar, getVar } = require('@gd-com/utils')

const tcpSplit = new StreamTcp()

let server = net.createServer((socket) => {
  socket.pipe(tcpSplit).on('data', (data) => {
    const packet = new Buffer.from(data)

    const decoded = getVar(packet)
    console.log('receive :', decoded.value)

    const packetToSend = putVar(Math.random())

    // we need to put the packet length on top cause it's tcp
    const lengthBuffer = Buffer.alloc(4)
    lengthBuffer.writeUInt32LE(packetToSend.length, 0)
    const finalBuffer = Buffer.concat([lengthBuffer, packetToSend])

    console.log('send :', finalBuffer)
    socket.write(finalBuffer)
  })

  socket.on('error', () => console.log('Bye :('))
})

server.on('error', (err) => {
  throw err
})

server.listen(8090, '127.0.0.1', () => {
  console.log(`Server launched TCP 127.0.0.1:${8090}`)
})
```

## Test

```
git clone git@github.com:gd-com/utils.git gd-com-utils
cd gd-com-utils
npm install or yarn install
npm run lint && npm run test
```

## Contributing

Please read [CONTRIBUTING](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## TODO & CHANGELOG
[CHANGELOG](CHANGELOG.md)

[TODO](TODO.md)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Thanks
* Godot
* Godot France
* GDQuest
* IG-Dev
* **Salsa2k** for the [initial work](https://github.com/salsa2k/godotserver)

## Buy me a coffe

BTC : `3DHU92kNHRbe2374cE2DrxDfE6i6Mu7ZSv`

ETH : `0x316dcd4F84606B7165f6ae2928594c3ef0FF3828`
