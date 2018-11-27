const chai = require('chai')
const gdCom = require('../src')
const dataFile = require('./data-01.json')
const dataDeepFile = require('./data-02.json')

const expect = chai.expect

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
          .then(() => gdCom.put_var(value))
          .then((encoded) => gdCom.get_var(encoded))
          .then((decoded) => {
            if (/Float/i.test(objecType)) {
              expect(decoded).to.be.closeTo(value, 0.00001)
            } else {
              expect(decoded).to.deep.equal(value)
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
        .then(() => gdCom.put_8(value))
        .then((encoded) => gdCom.get_8(encoded))
        .then((decoded) => {
            expect(decoded).to.deep.equal(value)
        })
    }, Promise.resolve())
  })

  it(`should encode/decode int 16`, () => {
    const values = [-32768, 32767, 10, -10]
    return values.reduce((promise, value) => {
      return promise
        .then(() => gdCom.put_16(value))
        .then((encoded) => gdCom.get_16(encoded))
        .then((decoded) => {
          expect(decoded).to.deep.equal(value)
        })
    }, Promise.resolve())
  })

  it(`should encode/decode int 32`, () => {
    const values = [-2147483648, 2147483647, 10, -10]
    return values.reduce((promise, value) => {
      return promise
        .then(() => gdCom.put_32(value))
        .then((encoded) => gdCom.get_32(encoded))
        .then((decoded) => {
          expect(decoded).to.deep.equal(value)
        })
    }, Promise.resolve())
  })

  // unsigned int
  it(`should encode/decode uint 8`, () => {
    const values = [0, 255, 10, 105]
    return values.reduce((promise, value) => {
      return promise
        .then(() => gdCom.put_u8(value))
        .then((encoded) => gdCom.get_u8(encoded))
        .then((decoded) => {
          expect(decoded).to.deep.equal(value)
        })
    }, Promise.resolve())
  })

  it(`should encode/decode uint 16`, () => {
    const values = [0, 65535, 10, 518]
    return values.reduce((promise, value) => {
      return promise
        .then(() => gdCom.put_u16(value))
        .then((encoded) => gdCom.get_u16(encoded))
        .then((decoded) => {
          expect(decoded).to.deep.equal(value)
        })
    }, Promise.resolve())
  })

  it(`should encode/decode uint 32`, () => {
    const values = [0, 4294967295, 10, 518]
    return values.reduce((promise, value) => {
      return promise
        .then(() => gdCom.put_u32(value))
        .then((encoded) => gdCom.get_u32(encoded))
        .then((decoded) => {
          expect(decoded).to.deep.equal(value)
        })
    }, Promise.resolve())
  })

  // string
  it(`should encode/decode string`, () => {
    const values = ['hello', 'world', 'hello world', 'hello world hello world']
    return values.reduce((promise, value) => {
      return promise
        .then(() => gdCom.put_string(value))
        .then((encoded) => gdCom.get_string(encoded))
        .then((decoded) => {
          expect(decoded).to.deep.equal(value)
        })
    }, Promise.resolve())
  })

  // float
  it(`should encode/decode float`, () => {
    const values = [10.520, -10.520]
    return values.reduce((promise, value) => {
      return promise
        .then(() => gdCom.put_float(value))
        .then((encoded) => gdCom.get_float(encoded))
        .then((decoded) => {
          expect(decoded).to.deep.closeTo(value, 0.00001)
        })
    }, Promise.resolve())
  })

  // double
  it(`should encode/decode double`, () => {
    const values = [10.520, -10.520]
    return values.reduce((promise, value) => {
      return promise
        .then(() => gdCom.put_double(value))
        .then((encoded) => gdCom.get_double(encoded))
        .then((decoded) => {
          expect(decoded).to.deep.closeTo(value, 0.00001)
        })
    }, Promise.resolve())
  })
})
