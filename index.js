// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Register view engine
fastify.register(require('point-of-view'), {
  engine: {
    ejs: require('ejs')
  }
})

// Declare a route
fastify.get('/', async (request, reply) => {
  return reply.view('templates/index.ejs');
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()