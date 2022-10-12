import { getVarInteger } from './integer'
import {IGetReturn, GodotArray, GodotInteger} from "../../types";
import Long from "long";

/**
 * Decode PoolIntArray
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Array, length: Number}}
 */
export function getVarInt32Array (genericDecoder, buf): IGetReturn<GodotArray<GodotInteger | Long>> {
  const nbEntries = buf.readUInt32LE(0)

  // start at 4 cause of nbEntries
  const data: {
    array: Array<number | Long>,
    buffer: Buffer,
    pos: number,
  }  = {
    array: [],
    buffer: buf.slice(4),
    pos: 4
  }

  for (let index = 0; index < nbEntries; index++) {
    const decodedValue = getVarInteger(genericDecoder, data.buffer, 0)
    data.array.push(decodedValue.value)
    data.buffer = data.buffer.slice(decodedValue.length)
    data.pos += decodedValue.length
  }

  return {
    value: data.array,
    length: data.pos
  }
}