const chai = require('chai')
const Long = require('long')
const dataFile = require('./data-01.json')
const dataDeepFile = require('./data-02.json')

const expect = chai.expect

const getVar = require('../src/get/get_var')

const get8 = require('../src/get/get_8')
const get16 = require('../src/get/get_16')
const get32 = require('../src/get/get_32')
const get64 = require('../src/get/get_64')

const getU8 = require('../src/get/get_u8')
const getU16 = require('../src/get/get_u16')
const getU32 = require('../src/get/get_u32')
const getU64 = require('../src/get/get_u64')

const getFloat = require('../src/get/get_float')
const getDouble = require('../src/get/get_double')
const getString = require('../src/get/get_string')

const putVar = require('../src/put/put_var')

const put8 = require('../src/put/put_8')
const put16 = require('../src/put/put_16')
const put32 = require('../src/put/put_32')
const put64 = require('../src/put/put_64')

const putU8 = require('../src/put/put_u8')
const putU16 = require('../src/put/put_u16')
const putU32 = require('../src/put/put_u32')
const putU64 = require('../src/put/put_u64')

const putFloat = require('../src/put/put_float')
const putDouble = require('../src/put/put_double')
const putString = require('../src/put/put_string')

let data = {
  Null: [ null ],
  Boolean: [ true, false ],
  Integer: [ 42, -42, 0 ],
  Float: [ -42.4, 42.45, 0.0, 0.15 ],
  String: [ 'test', 'test2', 'true', 'false' ],
  Dictionary: [{
    test2: null,
    true: false,
    12: -12,
    test: 'test',
    dataDeepFile
  }],
  Array: [
    [ null, true, false, 12, -12, 'test', 'test2' ],
    dataFile
  ]
}

describe('gd-com binary serializer', () => {
  for (let objecType in data) {
    it(`should encode/decode variant ${objecType}`, () => {
      let dataType = data[objecType]

      return dataType.reduce((promise, value) => {
        return promise
          .then(() => putVar(value))
          .then((encoded) => getVar(encoded))
          .then((decoded) => {
            if (/Float/i.test(objecType)) {
              expect(decoded.value).to.be.closeTo(value, 0.00001)
            } else {
              expect(decoded.value).to.deep.equal(value)
            }
          })
      }, Promise.resolve())
    })
  }

  // signed int
  it(`should encode/decode int 8`, () => {
    const values = [-128, 127, 10, -10]
    return values.reduce((promise, value) => {
      return promise
        .then(() => put8(value))
        .then((encoded) => get8(encoded))
        .then((decoded) => {
          expect(decoded.value).to.deep.equal(value)
        })
    }, Promise.resolve())
  })

  it(`should encode/decode int 16`, () => {
    const values = [-32768, 32767, 10, -10]
    return values.reduce((promise, value) => {
      return promise
        .then(() => put16(value))
        .then((encoded) => get16(encoded))
        .then((decoded) => {
          expect(decoded.value).to.deep.equal(value)
        })
    }, Promise.resolve())
  })

  it(`should encode/decode int 32`, () => {
    const values = [-2147483648, 2147483647, 10, -10]
    return values.reduce((promise, value) => {
      return promise
        .then(() => put32(value))
        .then((encoded) => get32(encoded))
        .then((decoded) => {
          expect(decoded.value).to.deep.equal(value)
        })
    }, Promise.resolve())
  })

  it(`should encode/decode int 64`, () => {
    const values = [Long.MAX_VALUE.toString(), Long.MIN_VALUE.toString(), '10', '518']
    return values.reduce((promise, value) => {
      return promise
        .then(() => put64(value))
        .then((encoded) => get64(encoded))
        .then((decoded) => {
          expect(decoded.value).to.be.equal(value)
        })
    }, Promise.resolve())
  })

  // unsigned int
  it(`should encode/decode uint 8`, () => {
    const values = [0, 255, 10, 105]
    return values.reduce((promise, value) => {
      return promise
        .then(() => putU8(value))
        .then((encoded) => getU8(encoded))
        .then((decoded) => {
          expect(decoded.value).to.deep.equal(value)
        })
    }, Promise.resolve())
  })

  it(`should encode/decode uint 16`, () => {
    const values = [0, 65535, 10, 518]
    return values.reduce((promise, value) => {
      return promise
        .then(() => putU16(value))
        .then((encoded) => getU16(encoded))
        .then((decoded) => {
          expect(decoded.value).to.deep.equal(value)
        })
    }, Promise.resolve())
  })

  it(`should encode/decode uint 32`, () => {
    const values = [0, 4294967295, 10, 518]
    return values.reduce((promise, value) => {
      return promise
        .then(() => putU32(value))
        .then((encoded) => getU32(encoded))
        .then((decoded) => {
          expect(decoded.value).to.deep.equal(value)
        })
    }, Promise.resolve())
  })

  it(`should encode/decode uint 64`, () => {
    const values = [Long.MAX_UNSIGNED_VALUE.toString(), '0', '10', '518']
    return values.reduce((promise, value) => {
      return promise
        .then(() => putU64(value))
        .then((encoded) => getU64(encoded))
        .then((decoded) => {
          expect(decoded.value).to.be.equal(value)
        })
    }, Promise.resolve())
  })

  // string
  it(`should encode/decode string`, () => {
    const values = ['hello', 'world', 'hello world', 'hello world hello world']
    return values.reduce((promise, value) => {
      return promise
        .then(() => putString(value))
        .then((encoded) => getString(encoded))
        .then((decoded) => {
          expect(decoded.value).to.deep.equal(value)
        })
    }, Promise.resolve())
  })

  // float
  it(`should encode/decode float`, () => {
    const values = [10.520, -10.520]
    return values.reduce((promise, value) => {
      return promise
        .then(() => putFloat(value))
        .then((encoded) => getFloat(encoded))
        .then((decoded) => {
          expect(decoded.value).to.deep.closeTo(value, 0.00001)
        })
    }, Promise.resolve())
  })

  // double
  it(`should encode/decode double`, () => {
    const values = [10.520, -10.520]
    return values.reduce((promise, value) => {
      return promise
        .then(() => putDouble(value))
        .then((encoded) => getDouble(encoded))
        .then((decoded) => {
          expect(decoded.value).to.deep.closeTo(value, 0.00001)
        })
    }, Promise.resolve())
  })
})
