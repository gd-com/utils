const dgram = require('dgram')
const { getU16 } = require('@gd-com/utils')
const { v4 } = require('uuid')
const process = require('./process')

const server = dgram.createSocket('udp4')

let clients = {}

server.on('listening', () => {
  let address = server.address()
  console.log(`UDP Server listening on ${address.address}:${address.port}`)
})

server.on('message', (buf, remote) => {
  let client = null
  if (!clients.hasOwnProperty(`${remote.address}-${remote.port}`)) {
    clients[`${remote.address}-${remote.port}`] = {uuid: v4()}
    client = clients[`${remote.address}-${remote.port}`]
    console.log(`[${client.uuid}] New client from ${remote.address}:${remote.port}`)
  } else {
    client = clients[`${remote.address}-${remote.port}`]
  }

  let recieve = new Buffer.from(buf)
  const type = getU16(recieve)

  console.log(`[${client.uuid}] << Recieve packet code`, type.value)
  if (process.hasOwnProperty(type.value)) {
    process[`${type.value}`](client, server, remote, recieve.slice(type.length))
  } else {
    console.log(`[${client.uuid}] << Unknow packet code`, type.value)
  }
})

server.bind(9091, '127.0.0.1')
