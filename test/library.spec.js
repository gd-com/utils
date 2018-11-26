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
    it(`should encode/decode ${objecType}`, () => {
      let dataType = data[objecType]

      return dataType.reduce((promise, value) => {
        return promise
          .then(() => gdCom.encode(value))
          .then((encoded) => gdCom.decode(encoded))
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
})
