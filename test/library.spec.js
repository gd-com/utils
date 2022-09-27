const { describe, expect, test } = require('@jest/globals')
const Long = require('long')
const dataFile = require('./data-01.json')
const dataDeepFile = require('./data-02.json')

const GdCom = require('../dist')

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
  describe('should encode/decode', () => {
    for (const objectType in data) {
      test(`variant ${objectType}`, () => {
        const dataType = data[objectType]

        dataType.forEach((value) => {
          const encoded = GdCom.putVar(value)
          const decoded = GdCom.getVar(encoded)

          if (/Float/i.test(objectType)) {
            expect(decoded.value).toBeCloseTo(value, 5)
          } else {
            expect(decoded.value).toEqual(value)
          }
        })
      })
    }

    test('variant Vector2', () => {
      const dataType = [
        new GdCom.GodotVector2(1,2),
        new GdCom.GodotVector2(-1,-2),
        new GdCom.GodotVector2(-42.4,0.15),
      ]

      dataType.forEach((value) => {
        const encoded = GdCom.putVar(value, GdCom.TYPE.VECTOR2)
        const decoded = GdCom.getVar(encoded)

        expect(decoded.value.x).toBeCloseTo(value.x, 5)
        expect(decoded.value.y).toBeCloseTo(value.y, 5)
      })
    })

    test('variant Rect2', () => {
      const dataType = [
        new GdCom.GodotRect2(
          new GdCom.GodotVector2(1,2),
          new GdCom.GodotVector2(3,4),
        ),
        new GdCom.GodotRect2(
          new GdCom.GodotVector2(-1,-2),
          new GdCom.GodotVector2(-3,-4),
        ),
        new GdCom.GodotRect2(
          new GdCom.GodotVector2(-42.54,0.520),
          new GdCom.GodotVector2(0.520,-42.54),
        ),
      ]

      dataType.forEach((value) => {
        const encoded = GdCom.putVar(value, GdCom.TYPE.RECT2)
        const decoded = GdCom.getVar(encoded)

        expect(decoded.value.coordinate.x).toBeCloseTo(value.coordinate.x, 5)
        expect(decoded.value.coordinate.y).toBeCloseTo(value.coordinate.y, 5)
        expect(decoded.value.size.x).toBeCloseTo(value.size.x, 5)
        expect(decoded.value.size.y).toBeCloseTo(value.size.y, 5)
      })
    })

    test('variant Vector3', () => {
      const dataType = [
        { x: 1, y: 2, z: 3 },
        { x: -1, y: -2, z: -0.520 },
        { x: -42.54, y: 0.520, z: 0.520 }
      ]

      dataType.forEach((value) => {
        const encoded = GdCom.putVar(value, GdCom.TYPE.VECTOR3)
        const decoded = GdCom.getVar(encoded)

        expect(decoded.value.x).toBeCloseTo(value.x, 5)
        expect(decoded.value.y).toBeCloseTo(value.y, 5)
        expect(decoded.value.z).toBeCloseTo(value.z, 5)
      })
    })

    test('variant Plane', () => {
      const dataType = [
        { x: 1, y: 2, z: 3, distance: 2 },
        { x: -1, y: -2, z: -0.520, distance: 2 },
        { x: -42.54, y: 0.520, z: 0.520, distance: 2 }
      ]

      dataType.forEach((value) => {
        const encoded = GdCom.putVar(value, GdCom.TYPE.PLANE)
        const decoded = GdCom.getVar(encoded)

        expect(decoded.value.x).toBeCloseTo(value.x, 5)
        expect(decoded.value.y).toBeCloseTo(value.y, 5)
        expect(decoded.value.z).toBeCloseTo(value.z, 5)
        expect(decoded.value.distance).toBeCloseTo(value.distance, 5)
      })
    })

    test('variant Quat', () => {
      const dataType = [
        { x: 1, y: 2, z: 3, w: 2 },
        { x: -1, y: -2, z: -0.520, w: 2 },
        { x: -42.54, y: 0.520, z: 0.520, w: 2 }
      ]

      dataType.forEach((value) => {
        const encoded = GdCom.putVar(value, GdCom.TYPE.QUATERNION)
        const decoded = GdCom.getVar(encoded)

        expect(decoded.value.x).toBeCloseTo(value.x, 5)
        expect(decoded.value.y).toBeCloseTo(value.y, 5)
        expect(decoded.value.z).toBeCloseTo(value.z, 5)
        expect(decoded.value.w).toBeCloseTo(value.w, 5)
      })
    })

    test('variant AABB', () => {
      const dataType = [
        new GdCom.GodotAabb(
          new GdCom.GodotVector3(1, 2, 3),
          new GdCom.GodotVector3(4, 5, 6),
        ),
        new GdCom.GodotAabb(
          new GdCom.GodotVector3(-1, -2, -3),
          new GdCom.GodotVector3(-4, -5, -6),
        ),
        new GdCom.GodotAabb(
          new GdCom.GodotVector3(1.05, -42.852, 3.52),
          new GdCom.GodotVector3(4, 5, 6),
        ),
      ]

      dataType.forEach((value) => {
        const encoded = GdCom.putVar(value, GdCom.TYPE.AABB)
        const decoded = GdCom.getVar(encoded)

        expect(decoded.value.coordinate.x).toBeCloseTo(value.coordinate.x, 5)
        expect(decoded.value.coordinate.y).toBeCloseTo(value.coordinate.y, 5)
        expect(decoded.value.coordinate.z).toBeCloseTo(value.coordinate.z, 5)
        expect(decoded.value.size.x).toBeCloseTo(value.size.x, 5)
        expect(decoded.value.size.y).toBeCloseTo(value.size.y, 5)
        expect(decoded.value.size.z).toBeCloseTo(value.size.z, 5)
      })
    })

    test('variant Color', () => {
      const dataType = [
        { r: 0.1, g: 1, b: 0.5, a: 1 },
        { r: 1, g: 0, b: 0.5, a: 1 },
        { r: 0, g: 0.5, b: 1, a: 1 }
      ]

      dataType.forEach((value) => {
        const encoded = GdCom.putVar(value, GdCom.TYPE.COLOR)
        const decoded = GdCom.getVar(encoded)

        expect(decoded.value.r).toBeCloseTo(value.r, 5)
        expect(decoded.value.g).toBeCloseTo(value.g, 5)
        expect(decoded.value.b).toBeCloseTo(value.b, 5)
        expect(decoded.value.a).toBeCloseTo(value.a, 5)
      })
    })

    test('variant RAW_ARRAY', () => {
      const dataType = [
        Buffer.from([42, 42, 42, 42]),
        Buffer.from([1, 2, 3, 4])
      ]

      dataType.forEach((value) => {
        const encoded = GdCom.putVar(value, GdCom.TYPE.RAW_ARRAY)
        const decoded = GdCom.getVar(encoded)

        expect(decoded.value).toBeInstanceOf(Buffer)
        expect(Buffer.compare(value, decoded.value)).toEqual(0)
      })
    })

    // exception if is not a listed type
    test('should throw Invalid value: no matching encoder found', () => {
      try {
        GdCom.putVar({}, GdCom.TYPE.MAX)
      } catch (e) {
        expect(true)
      }
    })

    // signed int
    test('int 8', () => {
      const values = [-128, 127, 10, -10]
      values.forEach((value) => {
        const encoded = GdCom.put8(value)
        const decoded = GdCom.get8(encoded)
        expect(decoded.value).toEqual(value)
      })
    })

    test('int 16', () => {
      const values = [-32768, 32767, 10, -10]
      values.forEach((value) => {
        const encoded = GdCom.put16(value)
        const decoded = GdCom.get16(encoded)
        expect(decoded.value).toEqual(value)
      })
    })

    test('int 32', () => {
      const values = [-2147483648, 2147483647, 10, -10]
      values.forEach((value) => {
        const encoded = GdCom.put32(value)
        const decoded = GdCom.get32(encoded)
        expect(decoded.value).toEqual(value)
      })
    })

    test('int 64', () => {
      const values = [Long.MAX_VALUE.toString(), Long.MIN_VALUE.toString(), '10', '518']
      values.forEach((value) => {
        const encoded = GdCom.put64(value)
        const decoded = GdCom.get64(encoded)
        expect(decoded.value.toString()).toEqual(value)
      })
    })

    // unsigned int
    test('uint 8', () => {
      const values = [0, 255, 10, 105]
      values.forEach((value) => {
        const encoded = GdCom.putU8(value)
        const decoded = GdCom.getU8(encoded)
        expect(decoded.value).toEqual(value)
      })
    })

    test('uint 16', () => {
      const values = [0, 65535, 10, 518]
      values.forEach((value) => {
        const encoded = GdCom.putU16(value)
        const decoded = GdCom.getU16(encoded)
        expect(decoded.value).toEqual(value)
      })
    })

    test('uint 32', () => {
      const values = [0, 4294967295, 10, 518]
      values.forEach((value) => {
        const encoded = GdCom.putU32(value)
        const decoded = GdCom.getU32(encoded)
        expect(decoded.value).toEqual(value)
      })
    })

    test('uint 64', () => {
      const values = [Long.MAX_UNSIGNED_VALUE.toString(), '0', '10', '518']
      values.forEach((value) => {
        const encoded = GdCom.putU64(value)
        const decoded = GdCom.getU64(encoded)
        expect(decoded.value.toString()).toEqual(value)
      })
    })

    // string
    test('string', () => {
      const values = ['hello', 'world', 'hello world', 'hello world hello world']
      values.forEach((value) => {
        const encoded = GdCom.putString(value)
        const decoded = GdCom.getString(encoded)
        expect(decoded.value).toEqual(value)
      })
    })

    // float
    test('float', () => {
      const values = [10.520, -10.520]
      values.forEach((value) => {
        const encoded = GdCom.putFloat(value)
        const decoded = GdCom.getFloat(encoded)
        expect(decoded.value).toBeCloseTo(value, 5)
      })
    })

    // double
    test('double', () => {
      const values = [10.520, -10.520]
      values.forEach((value) => {
        const encoded = GdCom.putDouble(value)
        const decoded = GdCom.getDouble(encoded)
        expect(decoded.value).toBeCloseTo(value, 5)
      })
    })
  })

  describe('should prefixWithLength', () => {
    for (const objectType in data) {
      test(`variant ${objectType}`, () => {

        const dataType = data[objectType]

        dataType.forEach((value, idx) => {
          let lengthBuffer = null

          switch (objectType) {
            case 'Null':
              lengthBuffer = Buffer.from([4, 0, 0, 0])
              break;
            case 'Boolean':
              lengthBuffer = Buffer.from([8, 0, 0, 0])
              break;
            case 'Integer':
              lengthBuffer = Buffer.from([8, 0, 0, 0])
              break;
            case 'Float':
              lengthBuffer = Buffer.from([8, 0, 0, 0])
              break;
            case 'String':
              switch (idx) {
                case 0:
                  lengthBuffer = Buffer.from([12, 0, 0, 0])
                  break;
                case 1:
                  lengthBuffer = Buffer.from([16, 0, 0, 0])
                  break;
                case 2:
                  lengthBuffer = Buffer.from([12, 0, 0, 0])
                  break;
                case 3:
                  lengthBuffer = Buffer.from([16, 0, 0, 0])
                  break;
              }
              break;
            case 'Dictionary':
              lengthBuffer = Buffer.from([152, 90, 0, 0])
              break;
            case 'Array':
              switch (idx) {
                case 0:
                  lengthBuffer = Buffer.from([72, 0, 0, 0])
                  break;
                case 1:
                  lengthBuffer = Buffer.from([216, 37, 0, 0])
                  break;
              }
              break;
          }

          const encoded = GdCom.putVar(value)

          expect(GdCom.prefixWithLength(encoded))
            .toEqual(Buffer.concat([lengthBuffer, encoded]))
        })
      })
    }

    test('variant Vector2', () => {
      const dataType = [
        new GdCom.GodotVector2(1,2),
        new GdCom.GodotVector2(-1,-2),
        new GdCom.GodotVector2(-42.4,0.15),
      ]

      dataType.forEach((value) => {
        const encoded = GdCom.putVar(value, GdCom.TYPE.VECTOR2)

        expect(GdCom.prefixWithLength(encoded))
          .toEqual(Buffer.concat([Buffer.from([12, 0, 0, 0]), encoded]))
      })
    })

    test('variant Rect2', () => {
      const dataType = [
        new GdCom.GodotRect2(
          new GdCom.GodotVector2(1,2),
          new GdCom.GodotVector2(3,4),
        ),
        new GdCom.GodotRect2(
          new GdCom.GodotVector2(-1,-2),
          new GdCom.GodotVector2(-3,-4),
        ),
        new GdCom.GodotRect2(
          new GdCom.GodotVector2(-42.54,0.520),
          new GdCom.GodotVector2(0.520,-42.54),
        ),
      ]

      dataType.forEach((value) => {
        const encoded = GdCom.putVar(value, GdCom.TYPE.RECT2)

        expect(GdCom.prefixWithLength(encoded))
          .toEqual(Buffer.concat([Buffer.from([20, 0, 0, 0]), encoded]))
      })
    })

    test('variant Vector3', () => {
      const dataType = [
        { x: 1, y: 2, z: 3 },
        { x: -1, y: -2, z: -0.520 },
        { x: -42.54, y: 0.520, z: 0.520 }
      ]

      dataType.forEach((value) => {
        const encoded = GdCom.putVar(value, GdCom.TYPE.VECTOR3)

        expect(GdCom.prefixWithLength(encoded))
          .toEqual(Buffer.concat([Buffer.from([16, 0, 0, 0]), encoded]))
      })
    })

    test('variant Plane', () => {
      const dataType = [
        { x: 1, y: 2, z: 3, distance: 2 },
        { x: -1, y: -2, z: -0.520, distance: 2 },
        { x: -42.54, y: 0.520, z: 0.520, distance: 2 }
      ]

      dataType.forEach((value) => {
        const encoded = GdCom.putVar(value, GdCom.TYPE.PLANE)

        expect(GdCom.prefixWithLength(encoded))
          .toEqual(Buffer.concat([Buffer.from([20, 0, 0, 0]), encoded]))
      })
    })

    test('variant Quat', () => {
      const dataType = [
        { x: 1, y: 2, z: 3, w: 2 },
        { x: -1, y: -2, z: -0.520, w: 2 },
        { x: -42.54, y: 0.520, z: 0.520, w: 2 }
      ]

      dataType.forEach((value) => {
        const encoded = GdCom.putVar(value, GdCom.TYPE.QUATERNION)

        expect(GdCom.prefixWithLength(encoded))
          .toEqual(Buffer.concat([Buffer.from([88, 0, 0, 0]), encoded]))
      })
    })

    test('variant AABB', () => {
      const dataType = [
        new GdCom.GodotAabb(
          new GdCom.GodotVector3(1, 2, 3),
          new GdCom.GodotVector3(4, 5, 6),
        ),
        new GdCom.GodotAabb(
          new GdCom.GodotVector3(-1, -2, -3),
          new GdCom.GodotVector3(-4, -5, -6),
        ),
        new GdCom.GodotAabb(
          new GdCom.GodotVector3(1.05, -42.852, 3.52),
          new GdCom.GodotVector3(4, 5, 6),
        ),
      ]

      dataType.forEach((value) => {
        const encoded = GdCom.putVar(value, GdCom.TYPE.AABB)

        expect(GdCom.prefixWithLength(encoded))
          .toEqual(Buffer.concat([Buffer.from([28, 0, 0, 0]), encoded]))
      })
    })

    test('variant Color', () => {
      const dataType = [
        { r: 0.1, g: 1, b: 0.5, a: 1 },
        { r: 1, g: 0, b: 0.5, a: 1 },
        { r: 0, g: 0.5, b: 1, a: 1 }
      ]

      dataType.forEach((value) => {
        const encoded = GdCom.putVar(value, GdCom.TYPE.COLOR)

        expect(GdCom.prefixWithLength(encoded))
          .toEqual(Buffer.concat([Buffer.from([20, 0, 0, 0]), encoded]))
      })
    })

    test('variant RAW_ARRAY', () => {
      const dataType = [
        Buffer.from([42, 42, 42, 42]),
        Buffer.from([1, 2, 3, 4])
      ]

      dataType.forEach((value) => {
        const encoded = GdCom.putVar(value, GdCom.TYPE.RAW_ARRAY)

        expect(GdCom.prefixWithLength(encoded))
          .toEqual(Buffer.concat([Buffer.from([12, 0, 0, 0]), encoded]))
      })
    })

    // signed int
    test('int 8', () => {
      const values = [-128, 127, 10, -10]
      values.forEach((value) => {
        const encoded = GdCom.put8(value)

        expect(GdCom.prefixWithLength(encoded))
          .toEqual(Buffer.concat([Buffer.from([1, 0, 0, 0]), encoded]))
      })
    })

    test('int 16', () => {
      const values = [-32768, 32767, 10, -10]
      values.forEach((value) => {
        const encoded = GdCom.put16(value)

        expect(GdCom.prefixWithLength(encoded))
          .toEqual(Buffer.concat([Buffer.from([2, 0, 0, 0]), encoded]))
      })
    })

    test('int 32', () => {
      const values = [-2147483648, 2147483647, 10, -10]
      values.forEach((value) => {
        const encoded = GdCom.put32(value)

        expect(GdCom.prefixWithLength(encoded))
          .toEqual(Buffer.concat([Buffer.from([4, 0, 0, 0]), encoded]))
      })
    })

    test('int 64', () => {
      const values = [Long.MAX_VALUE.toString(), Long.MIN_VALUE.toString(), '10', '518']
      values.forEach((value) => {
        const encoded = GdCom.put64(value)

        expect(GdCom.prefixWithLength(encoded))
          .toEqual(Buffer.concat([Buffer.from([8, 0, 0, 0]), encoded]))
      })
    })

    // unsigned int
    test('uint 8', () => {
      const values = [0, 255, 10, 105]
      values.forEach((value) => {
        const encoded = GdCom.putU8(value)

        expect(GdCom.prefixWithLength(encoded))
          .toEqual(Buffer.concat([Buffer.from([1, 0, 0, 0]), encoded]))
      })
    })

    test('uint 16', () => {
      const values = [0, 65535, 10, 518]
      values.forEach((value) => {
        const encoded = GdCom.putU16(value)

        expect(GdCom.prefixWithLength(encoded))
          .toEqual(Buffer.concat([Buffer.from([2, 0, 0, 0]), encoded]))
      })
    })

    test('uint 32', () => {
      const values = [0, 4294967295, 10, 518]
      values.forEach((value) => {
        const encoded = GdCom.putU32(value)

        expect(GdCom.prefixWithLength(encoded))
          .toEqual(Buffer.concat([Buffer.from([4, 0, 0, 0]), encoded]))
      })
    })

    test('uint 64', () => {
      const values = [Long.MAX_UNSIGNED_VALUE.toString(), '0', '10', '518']
      values.forEach((value) => {
        const encoded = GdCom.putU64(value)

        expect(GdCom.prefixWithLength(encoded))
          .toEqual(Buffer.concat([Buffer.from([8, 0, 0, 0]), encoded]))
      })
    })

    // string
    test('string', () => {
      const values = ['hello', 'world', 'hello world', 'hello world hello world']
      values.forEach((value, idx) => {
        let lengthBuffer = null
        switch (idx) {
          case 0:
            lengthBuffer = Buffer.from([9, 0, 0, 0])
          break;
          case 1:
            lengthBuffer = Buffer.from([9, 0, 0, 0])
          break;
          case 2:
            lengthBuffer = Buffer.from([15, 0, 0, 0])
          break;
          case 3:
            lengthBuffer = Buffer.from([27, 0, 0, 0])
          break;
        }

        const encoded = GdCom.putString(value)

        expect(GdCom.prefixWithLength(encoded))
          .toEqual(Buffer.concat([lengthBuffer, encoded]))
      })
    })

    // float
    test('float', () => {
      const values = [10.520, -10.520]
      values.forEach((value) => {
        const encoded = GdCom.putFloat(value)

        expect(GdCom.prefixWithLength(encoded))
          .toEqual(Buffer.concat([Buffer.from([4, 0, 0, 0]), encoded]))
      })
    })

    // double
    test('double', () => {
      const values = [10.520, -10.520]
      values.forEach((value) => {
        const encoded = GdCom.putDouble(value)

        expect(GdCom.prefixWithLength(encoded))
          .toEqual(Buffer.concat([Buffer.from([8, 0, 0, 0]), encoded]))
      })
    })
  })

  describe('should StreamTcp', () => {
    test('push one data', (done) => {
      const callback = jest.fn();

      const tcpSplit = new GdCom.StreamTcp()

      tcpSplit.on('data', callback)

      tcpSplit.push(GdCom.prefixWithLength(GdCom.putVar('a')))

      setTimeout(() => {
        expect(callback).toHaveBeenCalledTimes(1);
        done();
      }, 100);
    })

    test('push many data', (done) => {
      const callback = jest.fn();

      const tcpSplit = new GdCom.StreamTcp()

      tcpSplit.on('data', callback)

      tcpSplit.push(GdCom.prefixWithLength(GdCom.putVar('a')))
      tcpSplit.push(GdCom.prefixWithLength(GdCom.putVar(true)))
      tcpSplit.push(GdCom.prefixWithLength(GdCom.putVar(55.44)))

      setTimeout(() => {
        expect(callback).toHaveBeenCalledTimes(3);
        done();
      }, 100);
    })

    test('push split data', (done) => {
      const callback = jest.fn();

      const tcpSplit = new GdCom.StreamTcp()

      tcpSplit.on('data', callback)

      tcpSplit.write(Buffer.from([8, 0, 0, 0]))
      tcpSplit.write(Buffer.from([1, 0, 0, 0]))
      tcpSplit.write(Buffer.from([1, 0, 0, 0]))

      setTimeout(() => {
        expect(callback).toHaveBeenCalledTimes(1);
        done();
      }, 1);
    })
  })
})
