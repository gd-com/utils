import { getVarString } from './string'
import {IGetReturn} from "../../types/IGetReturn";
import {GodotString} from "../../types/GodotString";
import {GodotArray} from "../../types/GodotArray";

/**
 * Decode PoolStringArray
 * @param genericDecoder
 * @param buf {Buffer}
 * @returns {{value: Array, length: Number}}
 */
export function getVarStringArray (genericDecoder, buf): IGetReturn<GodotArray<GodotString>>  {
  const nbEntries = buf.readUInt32LE(0)

  // start at 4 cause of nbEntries
  const data = {
    array: [],
    buffer: buf.slice(4),
    pos: 4
  }

  for (let index = 0; index < nbEntries; index++) {
    const decodedValue = getVarString(genericDecoder, data.buffer)
    data.array.push(decodedValue.value)
    data.buffer = data.buffer.slice(decodedValue.length)
    data.pos += decodedValue.length
  }

  return {
    value: data.array,
    length: data.pos
  }
}