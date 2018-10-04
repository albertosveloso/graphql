const { password } = require('../.env') //destructing pegando propriedade password dentro do arquivo .env

module.exports = {
  client: 'mysql',
  connection: {
    database: 'graphql',
    user: 'root',
    password,
    port: '3307'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
