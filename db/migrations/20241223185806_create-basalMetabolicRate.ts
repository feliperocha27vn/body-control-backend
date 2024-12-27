import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('basalMetabolicRate', (table) => {
    table
      .uuid('userId')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    table.string('tmb')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('basalMetabolicRate')
}
