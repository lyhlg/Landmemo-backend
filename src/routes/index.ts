const memo = require('./memo')

async function routes(fastify: any, options: any) {
  fastify.register(memo)
}

module.exports = routes