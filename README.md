# ![GM-Com](./img/logo.png) @gd-com/utils

Binary serialization helper godot and nodejs !

Written with this [api](https://docs.godotengine.org/en/latest/tutorials/misc/binary_serialization_api.html)

## Requirements

- Godot 4.0 or greater
- NodeJS 16 LTS or greater

For Godot 3 go *[@gd-com/utils v3](https://github.com/gd-com/utils/tree/v3)*

## How to install

`npm install --save @gd-com/utils`

## Examples

### What is certs-generator ?
This is a Godot project which is just used to generate SSL certificates to test TCP UDP and Websocket in "secure" mode

### Basic vs Advanced

- **Basic** is a simple example who explain how to send variant
- **Advanced** is a more complex example who explain how to send custom packets

## Available from gdCom

### Helpers

| Method | Description                                                                                                                                 | Return                                           |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------|
| prefixWithLength(buffer)       | Prefix the buffer passed in parameter by its size (required only for TCP)                                                                   |  Buffer |
| StreamTcp | To optimize Godot send from time to time several packets in the same packet (only for TCP), to deserialize well it is necessary to use this | Class       | 


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
|-------------------------------|------|
| NULL | 0    |
| BOOL | 1    |
| INTEGER | 2    |
| FLOAT | 3    |
| STRING | 4    |
| VECTOR2 | 5    |
| RECT2 | 6    |
| VECTOR3 | 7    |
| TRANSFORM2D | 8    |
| PLANE | 9    |
| QUATERNION | 10   |
| AABB | 11   |
| BASIS | 12   |
| TRANSFORM | 13   |
| COLOR | 14   |
| NODE_PATH | 15   |
| RID // unsupported | 16   |
| OBJECT // unsupported | 17   |
| DICTIONARY | 18   |
| ARRAY | 19   |
| RAW_ARRAY | 20   |
| INT_32_ARRAY | 21   |
| INT_64_ARRAY | 22   |
| FLOAT_32_ARRAY | 23   |
| FLOAT_64_ARRAY | 24   |
| STRING_ARRAY | 25   |
| VECTOR2_ARRAY | 26   |
| VECTOR3_ARRAY | 27   |
| COLOR_ARRAY | 28   |
| MAX | 29   |

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
