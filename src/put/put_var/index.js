const fs = require('fs')
const path = require('path')

const files = fs.readdirSync(__dirname)

const encoderList = files.reduce((encoders, filename) => {
  const filePath = path.join(__dirname, filename)
  const extname = path.extname(filePath)

  if (fs.statSync(filePath).isFile() &&
    /^\.js$/i.test(extname) &&
    __filename !== filePath) {
    encoders.push(require(filePath))
  }

  return encoders
}, [])

function isObject (value) {
  return value !== null && typeof value === 'object'
}

function isArray (value) {
  return Array.isArray(value)
}

function getType (value) {
  if (value == null) {
    return 'null'
  }

  if (isArray(value)) {
    return 'array'
  }

  if (isObject(value)) {
    return 'object'
  }
  return typeof value
}

function prepare (value, type = undefined) {
  const typeName = type || getType(value)
  const encoder = encoderList.filter((encoder) => encoder.type(typeName, value))

  if (encoder.length !== 1) {
    throw new Error(`Invalid value: no matching encoder found ${value}:${typeName}`)
  }

  return encoder[0].encode(prepare, value)
}

/**
 * Encode Variant
 * By default it can Number, Array, Object, Null, String for complex type you need to pass the type
 * @param {*} value
 * @param {TYPE} type
 * @returns {*}
 */
function putVar (value, type) {
  return prepare(value, type)
}

module.exports = putVar
