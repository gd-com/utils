# ![GM-Com](./img/logo.png) @gd-com/utils

Binary serialization helper godot and nodejs !

Written with this [api](http://docs.godotengine.org/en/latest/tutorials/misc/binary_serialization_api.html)

## Requirements

- Godot 3.X
- NodeJS 10.14.0 LTS or greater

## How to install

`npm install --save @gd-com/utils`

### GdBuffer



```javascript
var gdCom = require('@gd-com/utils') // var { GdBuffer } = require('@gd-com/utils')
var wanted = 'test'

const buff = new gdCom.GdBuffer()

await buff.putVar(wanted)

const recieved = await buff.getVar()

console.log(recieved === wanted) // is true

// buffer is empty !

```

#### - get
| Method | Return |
|-------------------------------|------------------------------|
| new GdBuffer() | GdBuffer Object |
| new GdBuffer(buffer) | GdBuffer Object with initial buffer data|
|-------------------------------|------------------------------|
| getVar() | Object |
| get8() | Object  |
| get16() | Object  |
| get32() | Object  |
| get64() | Object  |
| getU8() | Object  |
| getU16() | Object  |
| getU32() | Object  |
| getU64() | Object  |
| getFloat() | Object  |
| getDouble() | Object  |
| getString() | Object  |
|-------------------------------|------------------------------|
| putVar(value) | void |
| put8(value) | void |
| put16(value) | void |
| put32(value) | void |
| put64(value) | void |
| putU8(value) | void |
| putU16(value) | void |
| putU32(value) | void |
| putU64(value) | void |
| putFloat(value) | void |
| putDouble(value) | void |
| putString(value) | void |
|-------------------------------|------------------------------|
| getBuffer() | Buffer |

### Encode and Decode

Use GdBuffer is recommanded !

#### - get
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

#### - put
| Method | Return |
|-------------------------------|------------------------------|
| putVar(value) | Buffer |
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

Usage example :
```javascript
var gdCom = require('@gd-com/utils') // var { putVar, getVar } = require('@gd-com/utils')
var wanted = 'test'

gdCom.putVar(wanted).then((encoded) => {
  gdCom.getVar(encoded).then((decoded) => {
    console.log(decoded.value)
  })
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
