import { getVarInteger } from './integer'
import {IGetReturn} from "../../types/IGetReturn";
import {GodotArray} from "../../types/GodotArray";
import {GodotInteger} from "../../types/GodotInteger";

/**
 * Decode PoolIntArray
 * @param genericDecoder
 * @param buf {Buffer}
 * @param flag
 * @returns {{value: Array, length: Number}}
 */
export function getVarIntArray (genericDecoder, buf, flag): IGetReturn<GodotArray<GodotInteger>> {
  const nbEntries = buf.readUInt32LE(0)

  // start at 4 cause of nbEntries
  const data = {
    array: [],
    buffer: buf.slice(4),
    pos: 4
  }

  for (let index = 0; index < nbEntries; index++) {
    const decodedValue = getVarInteger(genericDecoder, data.buffer, flag)
    data.array.push(decodedValue.value)
    data.buffer = data.buffer.slice(decodedValue.length)
    data.pos += decodedValue.length
  }

  return {
    value: data.array,
    length: data.pos
  }
}