// eslint-disable-next-line no-unused-vars
import * as Knex from 'knex';

// eslint-disable-next-line import/prefer-default-export
export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('videos').del();

  // Inserts seed entries
  await knex('videos').insert([
    {
      category_id: 6,
      title: 'SEO com React',
      description: 'Será que é tão difícil fazer SEO com React?',
      url: 'https://www.youtube.com/watch?v=c8mVlakBESE',
    },
    {
      category_id: 6,
      title: 'Como fazer um React e aprender a ideia do Virtual DOM na prática',
      description: 'Já parou pra pensar como que o React renderiza as coisas na tela?',
      url: 'https://www.youtube.com/watch?v=5MzOCxSWrrc',
    },
    {
      category_id: 1,
      title: 'SEO com React',
      description: 'Será que é tão difícil fazer SEO com React?',
      url: 'https://www.youtube.com/watch?v=c8mVlakBESE',
    },
    {
      category_id: 1,
      title: 'O que faz uma desenvolvedora front-end? #HipstersPontoTube',
      url: 'https://www.youtube.com/watch?v=ZY3-MFxVdEw',
    },
    {
      category_id: 1,
      title: 'Componentização com VanillaJS #AluraMais',
      url: 'https://www.youtube.com/watch?v=LatCKpcOMak',
    },
    {
      category_id: 1,
      title: 'Pare de chutar e aprenda a display: inline #01',
      url: 'https://www.youtube.com/watch?v=5PS6ku8NzIE',
    },
    {
      category_id: 1,
      title: 'Template String: Interpolando strings com JavaScript #AluraMais',
      url: 'https://www.youtube.com/watch?v=ORI_HTXaIw0',
    },
    {
      category_id: 1,
      title: 'Qual é a melhor linguagem de programação? #HipstersPontoTube',
      url: 'https://www.youtube.com/watch?v=Uh-GNH-t89w',
    },
    {
      category_id: 1,
      title: 'Novidades do Angular v9',
      url: 'https://www.youtube.com/watch?v=34uHo7hFmG0',
    },
    {
      category_id: 2,
      title: 'PERCURSO em NÍVEL em ÁRVORE BINÁRIA | Estruturas de Dados #14',
      url: 'https://www.youtube.com/watch?v=UOK7nS2E9xM',
    },
    {
      category_id: 2,
      title: 'Coders4Tips - S01E04: GitHub CLI - Uma Nova Experiência no Github!',
      url: 'https://www.youtube.com/watch?v=6o6-bKOZOEY',
    },
    {
      category_id: 2,
      title: 'Programei 4 robôs que criam vídeos para mim no YouTube',
      url: 'https://www.youtube.com/watch?v=kjhu1LEmRpY',
    },
    {
      category_id: 2,
      title: 'API: Dicionário do Programador',
      url: 'https://www.youtube.com/watch?v=vGuqKIRWosk',
    },
    {
      category_id: 2,
      title: 'Usando Git Direito',
      url: 'https://www.youtube.com/watch?v=6OokP-NE49k',
    },
    {
      category_id: 3,
      title: 'Teste de Turing',
      url: 'https://www.youtube.com/watch?v=BaPGU4JWa34',
    },
    {
      category_id: 3,
      title: 'O que é Data Science?',
      url: 'https://www.youtube.com/watch?v=5b9Z8toVaAU&t=9s',
    },
    {
      category_id: 3,
      title: 'Melhor forma de aprender Python',
      url: 'https://www.youtube.com/watch?v=Gojqw9BQ5qY',
    },
    {
      category_id: 3,
      title: 'Como ingressar no mercado de Data Science?',
      url: 'https://www.youtube.com/watch?v=gxyjGmOV540',
    },
    {
      category_id: 4,
      title: 'Interestellar',
      url: 'https://www.youtube.com/watch?v=frD_IiY_A3E',
    },
    {
      category_id: 4,
      title: 'Gattaca',
      url: 'https://www.youtube.com/watch?v=Dl0tYLbrhhs',
    },
    {
      category_id: 4,
      title: 'A Chegada',
      url: 'https://www.youtube.com/watch?v=rNciXGzYZms',
    },
    {
      category_id: 4,
      title: 'Feitiço do Tempo',
      url: 'https://www.youtube.com/watch?v=zi8d69P9NvI',
    },
    {
      category_id: 5,
      title: 'Final Fantasy 7',
      url: 'https://www.youtube.com/watch?v=I_ATSCTnUD8',
    },
    {
      category_id: 5,
      title: 'Assassins Creed Valhalla',
      url: 'https://www.youtube.com/watch?v=KDfdjB9uL0U',
    },
    {
      category_id: 5,
      title: 'God of War 4',
      url: 'https://www.youtube.com/watch?v=FyIwEFXOcaE',
    },
    {
      category_id: 5,
      title: 'Resident Evil 8',
      url: 'https://www.youtube.com/watch?v=JSapXD9vxYA',
    },
    {
      title: 'O que todo projeto deveria ter? #01',
      url: 'https://www.youtube.com/watch?v=yMRSDdifGW8',
      category_id: 6,
    },
    {
      title: 'Como fazer um jogo com JavaScript?',
      url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
      category_id: 6,
    },
    {
      title: 'Como fazer o efeito de desenhar com CSS?',
      url: 'https://www.youtube.com/watch?v=4cEMgap9wpk',
      category_id: 6,
    },
    {
      title: 'Usando Excel como CMS + React',
      url: 'https://www.youtube.com/watch?v=5t2gq3xJZ9o',
      category_id: 6,
    },
  ]);
}
