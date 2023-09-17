'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/default/index', controller.default.home.index);
  router.get('/default/types',controller.default.home.getTypes)
  router.get('/default/article', controller.default.home.getArticleById);
  router.get('/default/articles', controller.default.home.getArticlesByTypeId);
};
