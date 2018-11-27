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
    values.map((itm) => {
      let encoded = gdCom.put_8(itm)
      let decoded = gdCom.get_8(encoded)
      expect(decoded).to.deep.equal(itm)
    })
  })

  it(`should encode/decode int 16`, () => {
    const values = [-32768, 32767, 10, -10]
    values.map((itm) => {
      let encoded = gdCom.put_16(itm)
      let decoded = gdCom.get_16(encoded)
      expect(decoded).to.deep.equal(itm)
    })
  })

  it(`should encode/decode int 32`, () => {
    const values = [-2147483648, 2147483647, 10, -10]
    values.map((itm) => {
      let encoded = gdCom.put_32(itm)
      let decoded = gdCom.get_32(encoded)
      expect(decoded).to.deep.equal(itm)
    })
  })

  // unsigned int
  it(`should encode/decode uint 8`, () => {
    const values = [0, 255, 10, 105]
    values.map((itm) => {
      let encoded = gdCom.put_u8(itm)
      let decoded = gdCom.get_u8(encoded)
      expect(decoded).to.deep.equal(itm)
    })
  })

  it(`should encode/decode uint 16`, () => {
    const values = [0, 65535, 10, 518]
    values.map((itm) => {
      let encoded = gdCom.put_u16(itm)
      let decoded = gdCom.get_u16(encoded)
      expect(decoded).to.deep.equal(itm)
    })
  })

  it(`should encode/decode uint 32`, () => {
    const values = [0, 4294967295, 10, 518]
    values.map((itm) => {
      let encoded = gdCom.put_u32(itm)
      let decoded = gdCom.get_u32(encoded)
      expect(decoded).to.deep.equal(itm)
    })
  })

  // string
  it(`should encode/decode string`, () => {
    const values = ['hello', 'world', 'hello world', 'hello world hello world']
    values.map((itm) => {
      let encoded = gdCom.put_string(itm)
      let decoded = gdCom.get_string(encoded)
      expect(decoded).to.deep.equal(itm)
    })
  })

  // float
  it(`should encode/decode float`, () => {
    const values = [10.520, -10.520]
    values.map((itm) => {
      let encoded = gdCom.put_float(itm)
      let decoded = gdCom.get_float(encoded)
      expect(decoded).to.be.closeTo(itm, 0.00001)
    })
  })

  // double
  it(`should encode/decode double`, () => {
    const values = [10.520, -10.520]
    values.map((itm) => {
      let encoded = gdCom.put_double(itm)
      let decoded = gdCom.get_double(encoded)
      expect(decoded).to.be.closeTo(itm, 0.00001)
    })
  })
})
