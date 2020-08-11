import knex from 'knex';

const conn = knex({
  client: 'sqlite3',
  connection: {
    filename: './src/database/db.sqlite',
  },
});

export default conn;
