const chai = require('chai')
const Long = require('long')
const dataFile = require('./data-01.json')
const dataDeepFile = require('./data-02.json')

const expect = chai.expect

const GdCom = require('../src')

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
          .then(() => GdCom.putVar(value))
          .then((encoded) => GdCom.getVar(encoded))
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
        .then(() => GdCom.put8(value))
        .then((encoded) => GdCom.get8(encoded))
        .then((decoded) => {
          expect(decoded.value).to.deep.equal(value)
        })
    }, Promise.resolve())
  })

  it(`should encode/decode int 16`, () => {
    const values = [-32768, 32767, 10, -10]
    return values.reduce((promise, value) => {
      return promise
        .then(() => GdCom.put16(value))
        .then((encoded) => GdCom.get16(encoded))
        .then((decoded) => {
          expect(decoded.value).to.deep.equal(value)
        })
    }, Promise.resolve())
  })

  it(`should encode/decode int 32`, () => {
    const values = [-2147483648, 2147483647, 10, -10]
    return values.reduce((promise, value) => {
      return promise
        .then(() => GdCom.put32(value))
        .then((encoded) => GdCom.get32(encoded))
        .then((decoded) => {
          expect(decoded.value).to.deep.equal(value)
        })
    }, Promise.resolve())
  })

  it(`should encode/decode int 64`, () => {
    const values = [Long.MAX_VALUE.toString(), Long.MIN_VALUE.toString(), '10', '518']
    return values.reduce((promise, value) => {
      return promise
        .then(() => GdCom.put64(value))
        .then((encoded) => GdCom.get64(encoded))
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
        .then(() => GdCom.putU8(value))
        .then((encoded) => GdCom.getU8(encoded))
        .then((decoded) => {
          expect(decoded.value).to.deep.equal(value)
        })
    }, Promise.resolve())
  })

  it(`should encode/decode uint 16`, () => {
    const values = [0, 65535, 10, 518]
    return values.reduce((promise, value) => {
      return promise
        .then(() => GdCom.putU16(value))
        .then((encoded) => GdCom.getU16(encoded))
        .then((decoded) => {
          expect(decoded.value).to.deep.equal(value)
        })
    }, Promise.resolve())
  })

  it(`should encode/decode uint 32`, () => {
    const values = [0, 4294967295, 10, 518]
    return values.reduce((promise, value) => {
      return promise
        .then(() => GdCom.putU32(value))
        .then((encoded) => GdCom.getU32(encoded))
        .then((decoded) => {
          expect(decoded.value).to.deep.equal(value)
        })
    }, Promise.resolve())
  })

  it(`should encode/decode uint 64`, () => {
    const values = [Long.MAX_UNSIGNED_VALUE.toString(), '0', '10', '518']
    return values.reduce((promise, value) => {
      return promise
        .then(() => GdCom.putU64(value))
        .then((encoded) => GdCom.getU64(encoded))
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
        .then(() => GdCom.putString(value))
        .then((encoded) => GdCom.getString(encoded))
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
        .then(() => GdCom.putFloat(value))
        .then((encoded) => GdCom.getFloat(encoded))
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
        .then(() => GdCom.putDouble(value))
        .then((encoded) => GdCom.getDouble(encoded))
        .then((decoded) => {
          expect(decoded.value).to.deep.closeTo(value, 0.00001)
        })
    }, Promise.resolve())
  })

  // gdBuffer Test

  it(`gdBuffer should encode/decode`, () => {
    let buffer = new GdCom.GdBuffer()

    const values = ['test', 'test1', 'test2']

    return values.reduce((promise, value) => {
      return promise
        .then(() => buffer.putVar(value))
        .then(() => buffer.getVar())
        .then((test) => {
          expect(test).to.be.equal(value)
          expect(buffer.getBuffer().equals(Buffer.alloc(0))).to.be.equals(true)
        })
    }, Promise.resolve())
  })

  it(`gdBuffer should encode/decode with buffer length`, async () => {
    let buffer = new GdCom.GdBuffer()

    await buffer.putVar('test')
    await buffer.putVar('test')
    await buffer.putVar('test')
    await buffer.putVar('test')
    let test = await buffer.getVar()
    expect(test).to.be.equal('test')
    test = await buffer.getVar()
    expect(test).to.be.equal('test')
    test = await buffer.getVar()
    expect(test).to.be.equal('test')

    expect(buffer.getBuffer().length).to.be.equals(12)
  })

  it(`should encode/decode string and be empty`, () => {
    let buffer = new GdCom.GdBuffer(Buffer.alloc(0), true)

    const values = ['test', 'test1', 'test2']

    return values.reduce((promise, value) => {
      return promise
        .then(() => buffer.putVar(value))
        .then(() => buffer.getVar())
        .then((test) => {
          expect(test).to.be.equal(value)
          expect(buffer.getBuffer()).to.be.deep.equals(Buffer.alloc(0))
        })
    }, Promise.resolve())
  })

  it(`should encode/decode integer and be empty`, () => {
    let buffer = new GdCom.GdBuffer(Buffer.alloc(0), true)

    const values = [-100, 100, 500, 8520]

    return values.reduce((promise, value) => {
      return promise
        .then(() => buffer.putVar(value))
        .then(() => buffer.getVar())
        .then((test) => {
          expect(test).to.be.equal(value)
          expect(buffer.getBuffer()).to.be.deep.equals(Buffer.alloc(0))
        })
    }, Promise.resolve())
  })

  it(`should encode/decode float and be empty`, () => {
    let buffer = new GdCom.GdBuffer(Buffer.alloc(0))

    const values = [1.5, -1.5, 500.5, 8520, 8520]

    return values.reduce((promise, value) => {
      return promise
        .then(() => buffer.putVar(value))
        .then(() => buffer.getVar())
        .then((test) => {
          expect(test).to.be.equal(value)
          expect(buffer.getBuffer()).to.be.deep.equals(Buffer.alloc(0))
        })
    }, Promise.resolve())
  })

  it(`should encode/decode and contains test4`, async () => {
    let buffer = new GdCom.GdBuffer(Buffer.alloc(0))

    await buffer.putVar('test1')
    await buffer.putVar('test2')
    await buffer.putVar('test3')
    await buffer.putVar('test4')

    let test = await buffer.getVar()
    expect(test).to.be.equal('test1')
    expect(buffer.getBuffer().length).to.be.equals(48)

    test = await buffer.getVar()
    expect(test).to.be.equal('test2')
    expect(buffer.getBuffer().length).to.be.equals(32)

    test = await buffer.getVar()
    expect(test).to.be.equal('test3')
    expect(buffer.getBuffer().length).to.be.equals(16)
  })
})
