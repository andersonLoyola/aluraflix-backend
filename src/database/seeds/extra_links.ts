// eslint-disable-next-line no-unused-vars
import * as Knex from 'knex';

// eslint-disable-next-line import/prefer-default-export
export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('extra_links').del();

  // Inserts seed entries
  await knex('extra_links').insert([
    {
      text: 'Canal no YouTube',
      url: 'https://youtube.com/c/DevSoutinho',
    },
    {
      text: 'Formação de Jogos na Alura',
      url: 'https://www.alura.com.br/cursos-online-front-end',
    },
    {
      text: 'Formação de Front End na Alura',
      url: 'https://www.alura.com.br/cursos-online-front-end',
    },
    {
      text: 'Cursos de Back End na Alura',
      url: 'https://www.alura.com.br/cursos-online-programacao',
    },
    {
      text: 'Cursos de Data Science na Alura',
      url: 'https://www.alura.com.br/cursos-online-mobile',
    },
  ]);
}
