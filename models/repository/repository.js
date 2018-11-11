const fp = require('lodash/fp');
const joi = require('joi');
const db = require('../db');

const tableName = 'repository';

const insertSchema = joi
  .object({
    // id: joi.number().integer().required(),
    owner: joi.number(),
    full_name: joi.string().required(),
    description: joi.string(),
    html_url: joi.string(),
    language: joi.string(),
    stargazer_count: joi.number()
  })
  .required();

async function insert(params) {

  const repository = joi.attempt(params, insertSchema);

  return db(tableName)
    .insert(repository)
    .returning('*')
    .then(fp.first);
}

const readSchema = joi
  .object({
    id: joi.number().integer(),
    full_name: joi.string()
  })
  .xor('id', 'full_name')
  .required();

async function read(params) {
  const selection = joi.attempt(params, readSchema);

  return db(tableName)
    .where(selection)
    .select()
    .first();
}

module.exports = {
  tableName,
  insert,
  read
};
