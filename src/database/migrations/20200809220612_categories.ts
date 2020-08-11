// eslint-disable-next-line no-unused-vars
import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('categories', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.string('color').notNullable();
    table.integer('extra_links_id').unsigned();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('categories');
}
