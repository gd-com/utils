import {TYPE} from "../../constants";
import {putVarNull} from "./null";
import {putVarBool} from "./bool";
import {putVarInt} from "./integer";
import {putVarFloat} from "./float";
import {putVarString} from "./string";
import {putVarVector2} from "./vector2";
import {putVarRect2} from "./rect2";
import {putVarVector3} from "./vector3";
import {putVarAABB} from "./aabb";
import {putVarColor} from "./color";
import {putVarDictionnary} from "./dictionnary";
import {putVarArray} from "./array";
import {putVarRawArray} from "./rawArray";
import {putVarQuat} from "./quat";
import {putVarPlane} from "./plane";
import {IEncoderList} from "../../types";

const encoderList: IEncoderList = {
  [TYPE.NULL]: putVarNull,
  [TYPE.BOOL]: putVarBool,
  [TYPE.INTEGER]: putVarInt,
  [TYPE.FLOAT]: putVarFloat,
  [TYPE.STRING]: putVarString,
  [TYPE.VECTOR2]: putVarVector2,
  [TYPE.RECT2]: putVarRect2,
  [TYPE.VECTOR3]: putVarVector3,
  [TYPE.TRANSFORM2D]: undefined,
  [TYPE.PLANE]: putVarPlane,
  [TYPE.QUAT]: putVarQuat,
  [TYPE.AABB]: putVarAABB,
  [TYPE.BASIS]: undefined,
  [TYPE.TRANSFORM]: undefined,
  [TYPE.COLOR]: putVarColor,
  [TYPE.NODE_PATH]: undefined,
  [TYPE.RID]: undefined,
  [TYPE.OBJECT]: undefined,
  [TYPE.DICTIONARY]: putVarDictionnary,
  [TYPE.ARRAY]: putVarArray,
  [TYPE.RAW_ARRAY]: putVarRawArray,
  [TYPE.INT_32_ARRAY]: undefined,
  [TYPE.INT_64_ARRAY]: undefined,
  [TYPE.FLOAT_32_ARRAY]: undefined,
  [TYPE.FLOAT_64_ARRAY]: undefined,
  [TYPE.STRING_ARRAY]: undefined,
  [TYPE.VECTOR2_ARRAY]: undefined,
  [TYPE.VECTOR3_ARRAY]: undefined,
  [TYPE.COLOR_ARRAY]: undefined,
}

function getType (value: any) {
  if (value == null) {
    return TYPE.NULL
  }

  if (typeof value === "boolean") {
    return TYPE.BOOL
  }

  if (typeof value === "number") {
    if (Number.isInteger(value)) {
      return TYPE.INTEGER
    }
    return TYPE.FLOAT
  }

  if (typeof value === "string") {
    return TYPE.STRING
  }

  if (Array.isArray(value)) {
    return TYPE.ARRAY
  }

  if (typeof value === 'object') {
    if (value instanceof Buffer) {
      return TYPE.RAW_ARRAY
    }

    return TYPE.DICTIONARY
  }
  throw new Error(`You should specify type`)
}

function prepare (value, type?) {
  const typeCode = type || getType(value)
  const encoder = encoderList[`${typeCode}`]

  if (!encoder) {
    throw new Error(`Invalid value: no matching encoder found "${typeCode}"`)
  }

  return encoder(prepare, value)
}

/**
 * Encode Variant
 * By default it can Number, Array, Object, Null, String for complex type you need to pass the type
 * @param {*} value
 * @param {TYPE} type
 * @returns {*}
 */
export function putVar (value: any, type?: TYPE): Buffer {
  return prepare(value, type)
}
