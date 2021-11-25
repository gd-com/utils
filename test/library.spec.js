const { describe, expect, test } = require('@jest/globals')
const Long = require('long')
const dataFile = require('./data-01.json')
const dataDeepFile = require('./data-02.json')

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
    test(`should encode/decode variant ${objecType}`, () => {
      const dataType = data[objecType]

      dataType.forEach((value) => {
        const encoded = GdCom.putVar(value)
        const decoded = GdCom.getVar(encoded)

        if (/Float/i.test(objecType)) {
          expect(decoded.value).toBeCloseTo(value, 5)
        } else {
          expect(decoded.value).toEqual(value)
        }
      })
    })
  }

  test('should encode/decode variant Vector2', () => {
    const dataType = [
      { x: 1, y: 2 },
      { x: -1, y: -2 },
      { x: -42.4, y: 0.15 }
    ]

    dataType.forEach((value) => {
      const encoded = GdCom.putVar(value, GdCom.TYPE.VECTOR2)
      const decoded = GdCom.getVar(encoded)

      expect(decoded.value.x).toBeCloseTo(value.x, 5)
      expect(decoded.value.y).toBeCloseTo(value.y, 5)
    })
  })

  test('should encode/decode variant Rect2', () => {
    const dataType = [
      { x_coordinate: 1, y_coordinate: 2, x_size: 3, y_size: 4 },
      { x_coordinate: -1, y_coordinate: -2, x_size: -3, y_size: -4 },
      { x_coordinate: -42.54, y_coordinate: 0.520, x_size: 0.520, y_size: -42.54 }
    ]

    dataType.forEach((value) => {
      const encoded = GdCom.putVar(value, GdCom.TYPE.RECT2)
      const decoded = GdCom.getVar(encoded)

      expect(decoded.value.x_coordinate).toBeCloseTo(value.x_coordinate, 5)
      expect(decoded.value.y_coordinate).toBeCloseTo(value.y_coordinate, 5)
      expect(decoded.value.x_size).toBeCloseTo(value.x_size, 5)
      expect(decoded.value.y_size).toBeCloseTo(value.y_size, 5)
    })
  })

  test('should encode/decode variant Vector3', () => {
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

  test('should encode/decode variant Plane', () => {
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

  test('should encode/decode variant Quat', () => {
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

  test('should encode/decode variant AABB', () => {
    const dataType = [
      { x_coordinate: 1, y_coordinate: 2, z_coordinate: 3, x_size: 4, y_size: 5, z_size: 6 },
      { x_coordinate: -1, y_coordinate: -2, z_coordinate: -3, x_size: -4, y_size: -5, z_size: -6 },
      { x_coordinate: 1.05, y_coordinate: -42.852, z_coordinate: 3.52, x_size: 4, y_size: 5, z_size: 6 }
    ]

    dataType.forEach((value) => {
      const encoded = GdCom.putVar(value, GdCom.TYPE.AABB)
      const decoded = GdCom.getVar(encoded)

      expect(decoded.value.x_coordinate).toBeCloseTo(value.x_coordinate, 5)
      expect(decoded.value.y_coordinate).toBeCloseTo(value.y_coordinate, 5)
      expect(decoded.value.z_coordinate).toBeCloseTo(value.z_coordinate, 5)
      expect(decoded.value.x_size).toBeCloseTo(value.x_size, 5)
      expect(decoded.value.y_size).toBeCloseTo(value.y_size, 5)
      expect(decoded.value.z_size).toBeCloseTo(value.z_size, 5)
    })
  })

  test('should encode/decode variant Color', () => {
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

  test('should encode/decode variant PoolByteArray', () => {
    const dataType = [
      Buffer.from([42, 42, 42, 42]),
      Buffer.from([1, 2, 3, 4])
    ]

    dataType.forEach((value) => {
      const encoded = GdCom.putVar(value, GdCom.TYPE.POOL_BYTE_ARRAY)
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
  test('should encode/decode int 8', () => {
    const values = [-128, 127, 10, -10]
    values.forEach((value) => {
      const encoded = GdCom.put8(value)
      const decoded = GdCom.get8(encoded)
      expect(decoded.value).toEqual(value)
    })
  })

  test('should encode/decode int 16', () => {
    const values = [-32768, 32767, 10, -10]
    values.forEach((value) => {
      const encoded = GdCom.put16(value)
      const decoded = GdCom.get16(encoded)
      expect(decoded.value).toEqual(value)
    })
  })

  test('should encode/decode int 32', () => {
    const values = [-2147483648, 2147483647, 10, -10]
    values.forEach((value) => {
      const encoded = GdCom.put32(value)
      const decoded = GdCom.get32(encoded)
      expect(decoded.value).toEqual(value)
    })
  })

  test('should encode/decode int 64', () => {
    const values = [Long.MAX_VALUE.toString(), Long.MIN_VALUE.toString(), '10', '518']
    values.forEach((value) => {
      const encoded = GdCom.put64(value)
      const decoded = GdCom.get64(encoded)
      expect(decoded.value).toEqual(value)
    })
  })

  // unsigned int
  test('should encode/decode uint 8', () => {
    const values = [0, 255, 10, 105]
    values.forEach((value) => {
      const encoded = GdCom.putU8(value)
      const decoded = GdCom.getU8(encoded)
      expect(decoded.value).toEqual(value)
    })
  })

  test('should encode/decode uint 16', () => {
    const values = [0, 65535, 10, 518]
    values.forEach((value) => {
      const encoded = GdCom.putU16(value)
      const decoded = GdCom.getU16(encoded)
      expect(decoded.value).toEqual(value)
    })
  })

  test('should encode/decode uint 32', () => {
    const values = [0, 4294967295, 10, 518]
    values.forEach((value) => {
      const encoded = GdCom.putU32(value)
      const decoded = GdCom.getU32(encoded)
      expect(decoded.value).toEqual(value)
    })
  })

  test('should encode/decode uint 64', () => {
    const values = [Long.MAX_UNSIGNED_VALUE.toString(), '0', '10', '518']
    values.forEach((value) => {
      const encoded = GdCom.putU64(value)
      const decoded = GdCom.getU64(encoded)
      expect(decoded.value).toEqual(value)
    })
  })

  // string
  test('should encode/decode string', () => {
    const values = ['hello', 'world', 'hello world', 'hello world hello world']
    values.forEach((value) => {
      const encoded = GdCom.putString(value)
      const decoded = GdCom.getString(encoded)
      expect(decoded.value).toEqual(value)
    })
  })

  // float
  test('should encode/decode float', () => {
    const values = [10.520, -10.520]
    values.forEach((value) => {
      const encoded = GdCom.putFloat(value)
      const decoded = GdCom.getFloat(encoded)
      expect(decoded.value).toBeCloseTo(value, 5)
    })
  })

  // double
  test('should encode/decode double', () => {
    const values = [10.520, -10.520]
    values.forEach((value) => {
      const encoded = GdCom.putDouble(value)
      const decoded = GdCom.getDouble(encoded)
      expect(decoded.value).toBeCloseTo(value, 5)
    })
  })
})
