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

class GdBuffer {
  constructor (buffer = null) {
    this.buffer = buffer
    this.cursor = 0
  }

  async _internalGet (method) {
    let result = await method(this.buffer.slice(this.cursor))
    this.cursor += result.length
    await this._internalResetBuffer()
    return result.value
  }

  async _internalResetBuffer () {
    if (this.buffer && this.buffer.length === this.cursor) {
      this.buffer = null
      this.cursor = 0
    }
  }

  async putVar (variant) {
    this.buffer = await putVar(variant, this.buffer)
  }

  async put8 (variant) {
    this.buffer = await put8(variant, this.buffer)
  }

  async put16 (variant) {
    this.buffer = await put16(variant, this.buffer)
  }

  async put32 (variant) {
    this.buffer = await put32(variant, this.buffer)
  }

  async put64 (variant) {
    this.buffer = await put64(variant, this.buffer)
  }

  async putU8 (variant) {
    this.buffer = await putU8(variant, this.buffer)
  }

  async putU16 (variant) {
    this.buffer = await putU16(variant, this.buffer)
  }

  async putU32 (variant) {
    this.buffer = await putU32(variant, this.buffer)
  }

  async putU64 (variant) {
    this.buffer = await putU64(variant, this.buffer)
  }

  async putFloat (variant) {
    this.buffer = await putFloat(variant, this.buffer)
  }

  async putDouble (variant) {
    this.buffer = await putDouble(variant, this.buffer)
  }

  async putString (variant) {
    this.buffer = await putString(variant, this.buffer)
  }

  async getVar () {
    return this._internalGet(getVar)
  }

  async get8 () {
    return this._internalGet(get8)
  }

  async get16 () {
    return this._internalGet(get16)
  }

  async get32 () {
    return this._internalGet(get32)
  }

  async get64 () {
    return this._internalGet(get64)
  }

  async getU8 () {
    return this._internalGet(getU8)
  }

  async getU16 () {
    return this._internalGet(getU16)
  }

  async getU32 () {
    return this._internalGet(getU32)
  }

  async getU64 () {
    return this._internalGet(getU64)
  }

  async getFloat () {
    return this._internalGet(getFloat)
  }

  async getDouble () {
    return this._internalGet(getDouble)
  }

  async getString () {
    return this._internalGet(getString)
  }

  getBuffer () {
    return this.buffer
  }
}

module.exports = {
  GdBuffer,
  getVar,
  get8,
  get16,
  get32,
  get64,
  getU8,
  getU16,
  getU32,
  getU64,
  getFloat,
  getDouble,
  getString,
  putVar,
  put8,
  put16,
  put32,
  put64,
  putU8,
  putU16,
  putU32,
  putU64,
  putFloat,
  putDouble,
  putString
}
