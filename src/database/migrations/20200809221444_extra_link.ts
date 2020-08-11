// eslint-disable-next-line no-unused-vars
import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('extra_links', (table) => {
    table.increments();
    table.text('text').notNullable();
    table.string('url');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('extra_links');
}
