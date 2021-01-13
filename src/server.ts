// Require the framework and instantiate it
require('dotenv').config()
require("fastify-mongoose-driver").decorator();
import fastify from 'fastify';
const route = require('./routes')
const dbConnector = require('./db')

const server = fastify({ logger: true });

server.register(route)
server.register(dbConnector)

// Run the server!
const start = async () => {
  try {
    await server.listen(3000)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()