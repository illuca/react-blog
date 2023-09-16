/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.cors = {
    origin: 'http://localhost:3000', // Only allow this origin
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: ['*'], // The domainWhiteList is for egg-security
  };
  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '12345678',
      database: 'react_blog',
    },
    app: true,
    agent: false,
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1694159446881_2940';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
