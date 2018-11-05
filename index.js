const logger = require('./src/logger.js').getLogger();

logger.info('index.js - Starting...');

// Initiation

require('./src/init')
  .initiationObject
  .initEnvironmentParameters()
  .validatePort()
  ;

// Web Init
require('./web/index');

