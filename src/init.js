const initiationObject = {
  initEnvironmentParameters: () => {
    let port = process.env.PORT;
    const env = process.env.NODE_ENV;
    if (env === 'development') {
      const dotenv = require('dotenv'); // eslint-disable-line global-require
      const result = dotenv.config();
      if (result.error) {
        throw result.error.message;
      }

      if (!port || port === undefined) {
        process.env.PORT = result.parsed.PORT;
        port = result.parsed.PORT;
      }
    } else if (env === 'production') {
      // TODO something else
    }

    return initiationObject;
  },

  validatePort: () => {
    if (process.env.PORT === 'undefined' || process.env.PORT === undefined) {
      throw new Error(
        'Could not validate PORT parameter in process.env.PORT or init it from dotenv file.'
      );
    }
    return initiationObject;
  }
};

module.exports = { initiationObject }
