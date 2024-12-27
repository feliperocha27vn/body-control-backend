import fastify from 'fastify'
import { usersRoutes } from './routes/users'
import { env } from './env'

const app = fastify()

app.register(usersRoutes, {
  prefix: 'users',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server is Running')
  })
