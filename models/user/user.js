const fp = require('lodash/fp');
const joi = require('joi');
const db = require('../db');

const tableName = 'users';

const insertSchema = joi
  .object({
    login: joi.string().required(),
    display_name: joi.string(),
    avatar_url: joi
      .string()
      .uri()
      .required(),
    html_url: joi.string().required(),
    phone: joi.string().required()
  })
  .required();

async function insert(params) {
  const user = joi.attempt(params, insertSchema);

  return db(tableName)
    .insert(user)
    .returning('*')
    .then(fp.first);
}

const readSchema = joi
  .object({
    id: joi
      .number()
      .integer()
      .required(),
    login: joi.string()
  })
  .xor('id', 'login')
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
