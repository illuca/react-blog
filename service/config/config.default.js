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
  const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001']
  config.cors = {
    origin: (ctx) => {
      // Check if the incoming origin is in the allowedOrigins array
      if (allowedOrigins.includes(ctx.header.origin)) {
        return ctx.header.origin; // Reflect the requested origin
      }
      return false; // If not allowed, return false
    },
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
