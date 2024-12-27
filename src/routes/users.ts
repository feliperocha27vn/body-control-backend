import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { z } from 'zod'
import { randomUUID } from 'crypto'
import { calculateBasalRate } from '../models/calculateBasalMetabolicRate'

export async function usersRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    const allUsers = await knex('users')
      .join('basalMetabolicRate', 'users.id', 'basalMetabolicRate.userId')
      .select('*')

    return {
      allUsers,
    }
  })

  app.post('/', async (request, reply) => {
    const createUserBodySchema = z.object({
      firstName: z.string(),
      lastName: z.string(),
      height: z.number(),
      weight: z.number(),
      gender: z.boolean(),
      birthDate: z.string(),
    })

    const { firstName, lastName, height, weight, gender, birthDate } =
      createUserBodySchema.parse(request.body)

    const userBodyObject = {
      id: randomUUID(),
      firstName,
      lastName,
      height,
      weight,
      gender,
      birthDate,
    }

    await knex('users').insert(userBodyObject)

    const basalRate = calculateBasalRate(
      userBodyObject.weight,
      userBodyObject.height,
      userBodyObject.birthDate,
      userBodyObject.gender,
    )

    await knex('basalMetabolicRate').insert({
      userId: userBodyObject.id,
      tmb: basalRate,
    })

    reply.status(201).send()
  })
}
