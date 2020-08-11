// eslint-disable-next-line no-unused-vars
import * as Knex from 'knex';

// eslint-disable-next-line import/prefer-default-export
export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('categories').del();

  // Inserts seed entries
  await knex('categories').insert([
    {
      title: 'DevSoutinho',
      color: '#ff6a00',
      extra_links_id: 1,
    },
    {
      title: 'Games',
      color: 'red',
      extra_links_id: 2,
    },
    {
      title: 'Filmes',
      color: 'orange',
    },
    {
      title: 'Front End',
      color: '#6BD1FF',
      extra_links_id: 3,
    },
    {
      title: 'Back End',
      color: '#00C86F',
      extra_links_id: 4,
    },
    {
      title: 'Data Science e Inteligência Artificial',
      color: '#9cd33b',
      extra_links_id: 5,
    },
  ]);
}
