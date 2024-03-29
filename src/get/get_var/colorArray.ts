import { getVarColor } from './color'
import {IGetReturn, GodotColor, GodotArray} from "../../types";

/**
 * Decode PoolColorArray
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Array, length: Number}}
 */
export function getVarColorArray (genericDecoder, buf: Buffer): IGetReturn<GodotArray<GodotColor>> {
  const nbEntries = buf.readUInt32LE(0)

  // start at 4 cause of nbEntries
  const data: {
    array: Array<GodotColor>,
    buffer: Buffer,
    pos: number,
  }  = {
    array: [],
    buffer: buf.slice(4),
    pos: 4
  }

  for (let index = 0; index < nbEntries; index++) {
    const decodedValue = getVarColor(genericDecoder, data.buffer)
    data.array.push(decodedValue.value)
    data.buffer = data.buffer.slice(decodedValue.length)
    data.pos += decodedValue.length
  }

  return {
    value: data.array,
    length: data.pos
  }
}