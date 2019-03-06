const Get = require('../get')
const Put = require('../put')

class GdBuffer {
  constructor (buffer = Buffer.alloc(0)) {
    this._buffer = buffer
  }

  _internalGet (method) {
    let result = method(this._buffer)
    this._buffer = this._buffer.slice(result.length)
    return result.value
  }

  _internalPut (method, data) {
    let result = method(data)
    if (this._buffer.length > 0) {
      return Buffer.concat([this._buffer, result])
    }
    return result
  }

  putVar (data) {
    this._buffer = this._internalPut(Put.putVar, data)
  }

  put8 (data) {
    this._buffer = this._internalPut(Put.put8, data)
  }

  put16 (data) {
    this._buffer = this._internalPut(Put.put16, data)
  }

  put32 (data) {
    this._buffer = this._internalPut(Put.put32, data)
  }

  put64 (data) {
    this._buffer = this._internalPut(Put.put64, data)
  }

  putU8 (data) {
    this._buffer = this._internalPut(Put.putU8, data)
  }

  putU16 (data) {
    this._buffer = this._internalPut(Put.putU16, data)
  }

  putU32 (data) {
    this._buffer = this._internalPut(Put.putU32, data)
  }

  putU64 (data) {
    this._buffer = this._internalPut(Put.putU64, data)
  }

  putFloat (data) {
    this._buffer = this._internalPut(Put.putFloat, data)
  }

  putDouble (data) {
    this._buffer = this._internalPut(Put.putDouble, data)
  }

  putString (data) {
    this._buffer = this._internalPut(Put.putString, data)
  }

  getVar () {
    return this._internalGet(Get.getVar)
  }

  get8 () {
    return this._internalGet(Get.get8)
  }

  get16 () {
    return this._internalGet(Get.get16)
  }

  get32 () {
    return this._internalGet(Get.get32)
  }

  get64 () {
    return this._internalGet(Get.get64)
  }

  getU8 () {
    return this._internalGet(Get.getU8)
  }

  getU16 () {
    return this._internalGet(Get.getU16)
  }

  getU32 () {
    return this._internalGet(Get.getU32)
  }

  getU64 () {
    return this._internalGet(Get.getU64)
  }

  getFloat () {
    return this._internalGet(Get.getFloat)
  }

  getDouble () {
    return this._internalGet(Get.getDouble)
  }

  getString () {
    return this._internalGet(Get.getString)
  }

  getBuffer () {
    return this._buffer
  }
}

module.exports = GdBuffer
