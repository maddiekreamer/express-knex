// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/express_knex_warmup'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};