const chai = require('chai')
const Long = require('long')
const dataFile = require('./data-01.json')
const dataDeepFile = require('./data-02.json')

const expect = chai.expect

const GdCom = require('../src')

const data = {
  Null: [null],
  Boolean: [true, false],
  Integer: [42, -42, 0],
  Float: [-42.4, 42.45, 0.0, 0.15],
  String: ['test', 'test2', 'true', 'false'],
  Dictionary: [{
    test2: null,
    true: false,
    12: -12,
    test: 'test',
    dataDeepFile
  }],
  Array: [
    [null, true, false, 12, -12, 'test', 'test2'],
    dataFile
  ]
}

describe('gd-com binary serializer', () => {
  for (const objecType in data) {
    it(`should encode/decode variant ${objecType}`, () => {
      const dataType = data[objecType]

      dataType.forEach((value) => {
        const encoded = GdCom.putVar(value)
        const decoded = GdCom.getVar(encoded)

        if (/Float/i.test(objecType)) {
          expect(decoded.value).to.be.closeTo(value, 0.00001)
        } else {
          expect(decoded.value).to.deep.equal(value)
        }
      })
    })
  }

  // signed int
  it('should encode/decode int 8', () => {
    const values = [-128, 127, 10, -10]
    values.forEach((value) => {
      const encoded = GdCom.put8(value)
      const decoded = GdCom.get8(encoded)
      expect(decoded.value).to.deep.equal(value)
    })
  })

  it('should encode/decode int 16', () => {
    const values = [-32768, 32767, 10, -10]
    values.forEach((value) => {
      const encoded = GdCom.put16(value)
      const decoded = GdCom.get16(encoded)
      expect(decoded.value).to.deep.equal(value)
    })
  })

  it('should encode/decode int 32', () => {
    const values = [-2147483648, 2147483647, 10, -10]
    values.forEach((value) => {
      const encoded = GdCom.put32(value)
      const decoded = GdCom.get32(encoded)
      expect(decoded.value).to.deep.equal(value)
    })
  })

  it('should encode/decode int 64', () => {
    const values = [Long.MAX_VALUE.toString(), Long.MIN_VALUE.toString(), '10', '518']
    values.forEach((value) => {
      const encoded = GdCom.put64(value)
      const decoded = GdCom.get64(encoded)
      expect(decoded.value).to.be.equal(value)
    })
  })

  // unsigned int
  it('should encode/decode uint 8', () => {
    const values = [0, 255, 10, 105]
    values.forEach((value) => {
      const encoded = GdCom.putU8(value)
      const decoded = GdCom.getU8(encoded)
      expect(decoded.value).to.deep.equal(value)
    })
  })

  it('should encode/decode uint 16', () => {
    const values = [0, 65535, 10, 518]
    values.forEach((value) => {
      const encoded = GdCom.putU16(value)
      const decoded = GdCom.getU16(encoded)
      expect(decoded.value).to.deep.equal(value)
    })
  })

  it('should encode/decode uint 32', () => {
    const values = [0, 4294967295, 10, 518]
    values.forEach((value) => {
      const encoded = GdCom.putU32(value)
      const decoded = GdCom.getU32(encoded)
      expect(decoded.value).to.deep.equal(value)
    })
  })

  it('should encode/decode uint 64', () => {
    const values = [Long.MAX_UNSIGNED_VALUE.toString(), '0', '10', '518']
    values.forEach((value) => {
      const encoded = GdCom.putU64(value)
      const decoded = GdCom.getU64(encoded)
      expect(decoded.value).to.be.equal(value)
    })
  })

  // string
  it('should encode/decode string', () => {
    const values = ['hello', 'world', 'hello world', 'hello world hello world']
    values.forEach((value) => {
      const encoded = GdCom.putString(value)
      const decoded = GdCom.getString(encoded)
      expect(decoded.value).to.deep.equal(value)
    })
  })

  // float
  it('should encode/decode float', () => {
    const values = [10.520, -10.520]
    values.forEach((value) => {
      const encoded = GdCom.putFloat(value)
      const decoded = GdCom.getFloat(encoded)
      expect(decoded.value).to.deep.closeTo(value, 0.00001)
    })
  })

  // double
  it('should encode/decode double', () => {
    const values = [10.520, -10.520]
    values.forEach((value) => {
      const encoded = GdCom.putDouble(value)
      const decoded = GdCom.getDouble(encoded)
      expect(decoded.value).to.deep.closeTo(value, 0.00001)
    })
  })

  // gdBuffer Test

  it('gdBuffer should encode/decode', () => {
    const buffer = new GdCom.GdBuffer()

    const values = ['test', 'test1', 'test2']

    values.forEach((value) => {
      buffer.putVar(value)
      const test = buffer.getVar()
      expect(test).to.be.equal(value)
      expect(buffer.getBuffer().equals(Buffer.alloc(0))).to.be.equals(true)
    })
  })

  it('gdBuffer should encode/decode with buffer length', () => {
    const buffer = new GdCom.GdBuffer()

    buffer.putVar('test')
    buffer.putVar('test')
    buffer.putVar('test')
    buffer.putVar('test')
    let test = buffer.getVar()
    expect(test).to.be.equal('test')
    test = buffer.getVar()
    expect(test).to.be.equal('test')
    test = buffer.getVar()
    expect(test).to.be.equal('test')

    expect(buffer.getBuffer().length).to.be.equals(12)
  })

  it('should encode/decode string and be empty', () => {
    const buffer = new GdCom.GdBuffer(Buffer.alloc(0), true)

    const values = ['test', 'test1', 'test2']

    values.forEach((value) => {
      buffer.putVar(value)
      const test = buffer.getVar()
      expect(test).to.be.equal(value)
      expect(buffer.getBuffer()).to.be.deep.equals(Buffer.alloc(0))
    })
  })

  it('should encode/decode integer and be empty', () => {
    const buffer = new GdCom.GdBuffer(Buffer.alloc(0), true)

    const values = [-100, 100, 500, 8520]

    values.forEach((value) => {
      buffer.putVar(value)
      const test = buffer.getVar()
      expect(test).to.be.equal(value)
      expect(buffer.getBuffer()).to.be.deep.equals(Buffer.alloc(0))
    })
  })

  it('should encode/decode float and be empty', () => {
    const buffer = new GdCom.GdBuffer(Buffer.alloc(0))

    const values = [1.5, -1.5, 500.5, 8520, 8520]

    values.forEach((value) => {
      buffer.putVar(value)
      const test = buffer.getVar()
      expect(test).to.be.equal(value)
      expect(buffer.getBuffer()).to.be.deep.equals(Buffer.alloc(0))
    })
  })

  it('should encode/decode and contains test4', () => {
    const buffer = new GdCom.GdBuffer(Buffer.alloc(0))

    buffer.putVar('test1')
    buffer.putVar('test2')
    buffer.putVar('test3')
    buffer.putVar('test4')

    let test = buffer.getVar()
    expect(test).to.be.equal('test1')
    expect(buffer.getBuffer().length).to.be.equals(48)

    test = buffer.getVar()
    expect(test).to.be.equal('test2')
    expect(buffer.getBuffer().length).to.be.equals(32)

    test = buffer.getVar()
    expect(test).to.be.equal('test3')
    expect(buffer.getBuffer().length).to.be.equals(16)
  })
})
