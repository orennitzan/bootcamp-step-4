const knex = require('knex');

const config = require('../../config').pg;

const db = knex(config);

module.exports = db;

// TODO: Is it wright to migrate every time i require db?? I don't think so.
knex.migrate.latest([config]);
