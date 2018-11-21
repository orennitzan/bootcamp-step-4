const logger = require('./src/logger.js').getLogger();

logger.info('index.js - Starting...');

// Initiation
require('./src/init');

// validate configs (using joi)
require('./config');

logger.info(
  'index.js - Validation of configurations and env variables succeeded.'
);

require('./models/db/crud-test')

// const db = require('./models/db')

// const user = require('./models/user')

// user.insert({ login: 'orenni1@martix.co.il', avatar_url: 'orenni1@martix.co.il', html_url: 'orenni1@martix.co.il', phone: '972525252525' })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// user.read({ id: 2 })
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => console.log(err));

// const repository = require('./models/repository')

// let repoId = -1;

// repository.insert({ owner: 2, full_name: 'orenni', description: 'kuku 111', html_url: 'orenni1@martix.co.il', language: 'js', stargazer_count: 4 })
//   .then((res) => {
//     repoId = res.id
//     console.log(`inserted repository id ${repoId}`)
//   })
//   .catch((err) => console.log(err));

// repository.read({ id: 2 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));


// repository.readBySql({ id: 1002 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err)
//   });

