const { RECT2 } = require('../../constants')
const putU32 = require('../put_u32')
const putFloat = require('../put_float')

/**
 * Encode Rect2
 * @param value
 * @returns {Buffer}
 */
function putVarRect2 (value) {
  const type = putU32(RECT2)
  const coordinateX = putFloat(value.x_coordinate)
  const coordinateY = putFloat(value.y_coordinate)
  const sizeX = putFloat(value.x_size)
  const sizeY = putFloat(value.y_size)
  return Buffer.concat([type, coordinateX, coordinateY, sizeX, sizeY])
}

module.exports = {
  encode: (prepare, value) => putVarRect2(value),
  type: (typeName, value) => typeName === RECT2
}
