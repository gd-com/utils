import { getVarNull } from './null'
import { getVarBool } from "./bool";
import {getVarInteger} from "./integer";
import {getVarFloat} from "./float";
import {getVarString} from "./string";
import {getVarVector2} from "./vector2";
import {getVarRect2} from "./rect2";
import {getVarVector3} from "./vector3";
import {getVarTransform2d} from "./transform2d";
import {getVarPlane} from "./plane";
import {getVarQuat} from "./quat";
import {getVarAABB} from "./aabb";
import {getVarBasis} from "./basis";
import {getVarTransform} from "./transform";
import {getVarColor} from "./color";
import {getVarNodePath} from "./nodePath";
import {getVarDictionnary} from "./dictionnary";
import {getVarArray} from "./array";
import {getVarRawArray} from "./rawArray";
import {getVarIntArray} from "./intArray";
import {getVarRealArray} from "./realArray";
import {getVarStringArray} from "./stringArray";
import {getVarVector2Array} from "./vector2Array";
import {getVarVector3Array} from "./vector3Array";
import {getVarColorArray} from "./colorArray";
import {IGetReturn} from "../../types";
import { TYPE } from '../../constants'

const decoderList = {
  [TYPE.NULL]: getVarNull,
  [TYPE.BOOL]: getVarBool,
  [TYPE.INTEGER]: getVarInteger,
  [TYPE.FLOAT]: getVarFloat,
  [TYPE.STRING]: getVarString,
  [TYPE.VECTOR2]: getVarVector2,
  [TYPE.RECT2]: getVarRect2,
  [TYPE.VECTOR3]: getVarVector3,
  [TYPE.TRANSFORM2D]: getVarTransform2d,
  [TYPE.PLANE]: getVarPlane,
  [TYPE.QUAT]: getVarQuat,
  [TYPE.AABB]: getVarAABB,
  [TYPE.BASIS]: getVarBasis,
  [TYPE.TRANSFORM]: getVarTransform,
  [TYPE.COLOR]: getVarColor,
  [TYPE.NODE_PATH]: getVarNodePath,
  [TYPE.RID]: undefined,
  [TYPE.OBJECT]: undefined,
  [TYPE.DICTIONARY]: getVarDictionnary,
  [TYPE.ARRAY]: getVarArray,
  [TYPE.RAW_ARRAY]: getVarRawArray,
  [TYPE.INT_ARRAY]: getVarIntArray,
  [TYPE.REAL_ARRAY]: getVarRealArray,
  [TYPE.STRING_ARRAY]: getVarStringArray,
  [TYPE.VECTOR2_ARRAY]: getVarVector2Array,
  [TYPE.VECTOR3_ARRAY]: getVarVector3Array,
  [TYPE.COLOR_ARRAY]: getVarColorArray,
}

function decode (buffer, offset = 0) {
  const type = buffer.readInt16LE(offset)
  const flag = buffer.readInt16LE(offset + 2)
  const data = buffer.slice(offset + 4)

  if (decoderList[type] == null) {
    throw new Error(`Decode buffer error: Invalid type ${type}`)
  }

  return decoderList[type](decode, data, flag)
}

/**
 * Decode Variant
 * @param buf {Buffer}
 * @returns {{value: *, length: Number}}
 */
export function getVar (buf): IGetReturn<any> {
  const data = decode(buf)
  return { value: data.value, length: data.length + 4 } // +4 cause we don't export type length
}
