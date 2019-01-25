const Get = require('../get')
const Put = require('../put')

class GdBuffer {
  constructor (buffer = Buffer.alloc(0)) {
    this._buffer = buffer
  }

  async _internalGet (method) {
    let result = await method(this._buffer)
    this._buffer = this._buffer.slice(result.length)
    return result.value
  }

  async _internalPut (method, data) {
    let result = await method(data)
    if (this._buffer.length > 0) {
      return Buffer.concat([this._buffer, result])
    }
    return result
  }

  async putVar (data) {
    this._buffer = await this._internalPut(Put.putVar, data)
  }

  async put8 (data) {
    this._buffer = await this._internalPut(Put.put8, data)
  }

  async put16 (data) {
    this._buffer = await this._internalPut(Put.put16, data)
  }

  async put32 (data) {
    this._buffer = await this._internalPut(Put.put32, data)
  }

  async put64 (data) {
    this._buffer = await this._internalPut(Put.put64, data)
  }

  async putU8 (data) {
    this._buffer = await this._internalPut(Put.putU8, data)
  }

  async putU16 (data) {
    this._buffer = await this._internalPut(Put.putU16, data)
  }

  async putU32 (data) {
    this._buffer = await this._internalPut(Put.putU32, data)
  }

  async putU64 (data) {
    this._buffer = await this._internalPut(Put.putU64, data)
  }

  async putFloat (data) {
    this._buffer = await this._internalPut(Put.putFloat, data)
  }

  async putDouble (data) {
    this._buffer = await this._internalPut(Put.putDouble, data)
  }

  async putString (data) {
    this._buffer = await this._internalPut(Put.putString, data)
  }

  async getVar () {
    return this._internalGet(Get.getVar)
  }

  async get8 () {
    return this._internalGet(Get.get8)
  }

  async get16 () {
    return this._internalGet(Get.get16)
  }

  async get32 () {
    return this._internalGet(Get.get32)
  }

  async get64 () {
    return this._internalGet(Get.get64)
  }

  async getU8 () {
    return this._internalGet(Get.getU8)
  }

  async getU16 () {
    return this._internalGet(Get.getU16)
  }

  async getU32 () {
    return this._internalGet(Get.getU32)
  }

  async getU64 () {
    return this._internalGet(Get.getU64)
  }

  async getFloat () {
    return this._internalGet(Get.getFloat)
  }

  async getDouble () {
    return this._internalGet(Get.getDouble)
  }

  async getString () {
    return this._internalGet(Get.getString)
  }

  getBuffer () {
    return this._buffer
  }
}

module.exports = GdBuffer
