'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/default.test.js', () => {
  it('should assert', async () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.services.xx();
  });

  it('should GET /', async () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, egg')
      .expect(200);
  });
});
