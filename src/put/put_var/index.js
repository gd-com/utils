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
  const type = typeof value

  return value != null && (type === 'object' || type === 'function')
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

/**
 * Prepare command message
 * @param value
 * @returns {*}
 */
function prepare (value) {
  let typeName = getType(value)
  let encoder = encoderList.filter((encoder) => encoder.type(typeName, value))

  if (encoder.length !== 1) {
    throw new Error(`Invalid value: no matching encoder found ${value}:${typeName}`)
  }

  return encoder[0].encode(prepare, value)
}

/**
 * Encode data
 * @param value
 * @returns {*}
 */
module.exports = (value) => {
  return prepare(value)
}
