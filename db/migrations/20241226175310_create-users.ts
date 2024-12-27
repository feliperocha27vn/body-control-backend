import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', function (table) {
    table.uuid('id').primary()
    table.string('firstName').notNullable()
    table.string('lastName').notNullable()
    table.float('height').notNullable()
    table.boolean('gender').notNullable()
    table.date('birthDate').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('users')
}
