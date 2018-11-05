// PGHOST='localhost'
// PGUSER=postgres
// PGDATABASE=post1
// PGPASSWORD=P123456
// PGPORT=5432

require('dotenv').config();

const config = {
  FILES_LOCATION: 'LOCATION',
  DBNAME: process.env.DBNAME || 'risingstauck',
  POSTGRES_CONFIG: {
    user: 'postgres',
    host: 'localhost',
    database: 'risingstack',
    password: 'P123456',
    port: 5432
  }
};

module.exports = { config };
