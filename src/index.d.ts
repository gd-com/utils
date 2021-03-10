interface IReturn {
    value: number | string;
    length: number;
}

interface ITypes {
    NULL: number
    BOOL: number
    INTEGER: number
    FLOAT: number
    STRING: number
    VECTOR2: number
    RECT2: number
    VECTOR3: number
    TRANSFORM2D: number
    PLANE: number
    QUATERNION: number
    AABB: number
    BASIS: number
    TRANSFORM: number
    COLOR: number
    NODE_PATH: number
    RID: number
    OBJECT: number
    DICTIONARY: number
    ARRAY: number
    POOL_BYTE_ARRAY: number
    POOL_INT_ARRAY: number
    POOL_REAL_ARRAY: number
    POOL_STRING_ARRAY: number
    POOL_VECTOR2_ARRAY: number
    POOL_VECTOR3_ARRAY: number
    POOL_COLOR_ARRAY: number
    MAX: number
}

export function get8(buffer: Buffer, offset?: number): IReturn
export function get16(buffer: Buffer, offset?: number): IReturn
export function get32(buffer: Buffer, offset?: number): IReturn
export function get64(buffer: Buffer, offset?: number): IReturn
export function getDouble(buffer: Buffer, offset?: number): IReturn
export function getFloat(buffer: Buffer, offset?: number): IReturn
export function getString(buffer: Buffer, offset?: number): IReturn
export function getU8(buffer: Buffer, offset?: number): IReturn
export function getU16(buffer: Buffer, offset?: number): IReturn
export function getU32(buffer: Buffer, offset?: number): IReturn
export function getU64(buffer: Buffer, offset?: number): IReturn
export function getVar(buffer: Buffer): IReturn

export function put8(value: any): Buffer
export function put16(value: any): Buffer
export function put32(value: any): Buffer
export function put64(value: any): Buffer
export function putDouble(value: any): Buffer
export function putFloat(value: any): Buffer
export function putString(value: any): Buffer
export function putU8(value: any): Buffer
export function putU16(value: any): Buffer
export function putU32(value: any): Buffer
export function putU64(value: any): Buffer
export function putVar(value: any, type?: number): Buffer

export const TYPE: ITypes;
