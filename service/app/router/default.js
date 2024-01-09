'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {router, controller} = app;
  router.get('/default/index', controller.default.index.index);
  router.get('/default/types', controller.default.index.getTypes)
  router.get('/default/article', controller.default.index.getArticleById);
  router.get('/default/articles', controller.default.index.getArticlesByTypeId);
};
