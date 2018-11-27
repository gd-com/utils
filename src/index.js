const getVar = require('./get/get_var')

const get8 = require('./get/get_8')
const get16 = require('./get/get_16')
const get32 = require('./get/get_32')

const getU8 = require('./get/get_u8')
const getU16 = require('./get/get_u16')
const getU32 = require('./get/get_u32')

const getFloat = require('./get/get_float')
const getDouble = require('./get/get_double')
const getString = require('./get/get_string')

const putVar = require('./put/put_var')

const put8 = require('./put/put_8')
const put16 = require('./put/put_16')
const put32 = require('./put/put_32')

const putU8 = require('./put/put_u8')
const putU16 = require('./put/put_u16')
const putU32 = require('./put/put_u32')

const putFloat = require('./put/put_float')
const putDouble = require('./put/put_double')
const putString = require('./put/put_string')

module.exports = {
  get_8: get8.bind(get8),
  get_16: get16.bind(get16),
  get_32: get32.bind(get32),

  get_u8: getU8.bind(getU8),
  get_u16: getU16.bind(getU16),
  get_u32: getU32.bind(getU32),

  get_float: getFloat.bind(getFloat),
  get_double: getDouble.bind(getDouble),
  get_string: getString.bind(getString),
  get_var: getVar.bind(getVar),

  put_8: put8.bind(put8),
  put_16: put16.bind(put16),
  put_32: put32.bind(put32),

  put_u8: putU8.bind(putU8),
  put_u16: putU16.bind(putU16),
  put_u32: putU32.bind(putU32),

  put_float: putFloat.bind(putFloat),
  put_double: putDouble.bind(putDouble),
  put_string: putString.bind(putString),
  put_var: putVar.bind(putVar)
}
