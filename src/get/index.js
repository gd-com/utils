const fs = require('fs')
const path = require('path')
const { upperFirst } = require('../utils')

const files = fs.readdirSync(__dirname)

const filePathToFunctionName = (filePath) => {
  let data = path.basename(filePath).replace(/.js/g, '').split('_')
  return data[0] + upperFirst(data[1])
}

const decoderList = files.reduce((decoders, filename) => {
  const filePath = path.join(__dirname, filename)
  const extname = path.extname(filePath)

  if (fs.statSync(filePath).isFile() &&
    /^\.js$/i.test(extname) &&
    __filename !== filePath) {
    decoders[filePathToFunctionName(filePath)] = require(filePath)
  }

  if (fs.statSync(filePath).isDirectory()) {
    decoders[filePathToFunctionName(filePath)] = require(filePath)
  }

  return decoders
}, {})

module.exports = decoderList
