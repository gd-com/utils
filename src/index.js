const getVar = require('./get/get_var')

const get8 = require('./get/get_8')
const get16 = require('./get/get_16')
const get32 = require('./get/get_32')
const get64 = require('./get/get_64')

const getU8 = require('./get/get_u8')
const getU16 = require('./get/get_u16')
const getU32 = require('./get/get_u32')
const getU64 = require('./get/get_u64')

const getFloat = require('./get/get_float')
const getDouble = require('./get/get_double')
const getString = require('./get/get_string')

const putVar = require('./put/put_var')

const put8 = require('./put/put_8')
const put16 = require('./put/put_16')
const put32 = require('./put/put_32')
const put64 = require('./put/put_64')

const putU8 = require('./put/put_u8')
const putU16 = require('./put/put_u16')
const putU32 = require('./put/put_u32')
const putU64 = require('./put/put_u64')

const putFloat = require('./put/put_float')
const putDouble = require('./put/put_double')
const putString = require('./put/put_string')

module.exports = {
  get8: get8.bind(get8),
  get16: get16.bind(get16),
  get32: get32.bind(get32),
  get64: get64.bind(get64),

  getU8: getU8.bind(getU8),
  getU16: getU16.bind(getU16),
  getU32: getU32.bind(getU32),
  getU64: getU64.bind(getU64),

  getFloat: getFloat.bind(getFloat),
  getDouble: getDouble.bind(getDouble),
  getString: getString.bind(getString),
  getVar: getVar.bind(getVar),

  put8: put8.bind(put8),
  put16: put16.bind(put16),
  put32: put32.bind(put32),
  put64: put64.bind(put64),

  putU8: putU8.bind(putU8),
  putU16: putU16.bind(putU16),
  putU32: putU32.bind(putU32),
  putU64: putU64.bind(putU64),

  putFloat: putFloat.bind(putFloat),
  putDouble: putDouble.bind(putDouble),
  putString: putString.bind(putString),
  putVar: putVar.bind(putVar)
}
