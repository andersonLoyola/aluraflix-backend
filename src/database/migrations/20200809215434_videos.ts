// eslint-disable-next-line no-unused-vars
import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('videos', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.text('description');
    table.string('url').notNullable();
    table.integer('category_id').unsigned().notNullable();
    table.foreign('category_id').references('id').inTable('categories');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('videos');
}
