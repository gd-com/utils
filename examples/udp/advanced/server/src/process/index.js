const fs = require('fs')
const path = require('path')

const files = fs.readdirSync(__dirname);

module.exports = files.reduce((processors, filename) => {
  const filePath = path.join(__dirname, filename);
  const extname = path.extname(filePath);

  if (__filename !== filePath && fs.statSync(filePath).isFile() && /^\.js$/i.test(extname)) {
    let process = require(filePath);
    processors[process.packet] = process.process;
  }

  return processors;
}, {})