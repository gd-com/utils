const decoders = require('./decode')
const encoders = require('./encode')

module.exports = {
  decode: decoders.bind(decoders),
  encode: encoders.bind(decoders)
}
