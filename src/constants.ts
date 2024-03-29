// take a look = http=//docs.godotengine.org/en/latest/tutorials/misc/binary_serialization_api.html

export enum TYPE {
  NULL= 0,
  BOOL= 1,
  INTEGER= 2,
  FLOAT= 3,
  STRING= 4,
  VECTOR2= 5,
  RECT2= 6,
  VECTOR3= 7,
  TRANSFORM2D= 8,
  PLANE= 9,
  QUAT= 10,
  AABB= 11,
  BASIS= 12,
  TRANSFORM= 13,
  COLOR= 14,
  NODE_PATH= 15,
  RID= 16, // unsupported
  OBJECT= 17, // unsupported
  DICTIONARY= 18,
  ARRAY= 19,
  RAW_ARRAY= 20,
  INT_32_ARRAY= 21,
  INT_64_ARRAY= 22,
  FLOAT_32_ARRAY= 23,
  FLOAT_64_ARRAY= 24,
  STRING_ARRAY= 25,
  VECTOR2_ARRAY= 26,
  VECTOR3_ARRAY= 27,
  COLOR_ARRAY= 28,
  // MAX= 29
}
