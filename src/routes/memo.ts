async function memoRoute(fastify: any, options: any) {
  fastify.get('/', async () => {
    return { memo: '이것 메모'}
  })

  fastify.get('/test', async () => {
    return { memo: '이것 test'}
  })
}

module.exports = memoRoute