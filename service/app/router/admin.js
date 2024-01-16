module.exports = app => {
  const {router, controller} = app;
  const auth = app.middleware.auth();
  router.get('/admin/index', controller.admin.index.index);
  router.post('/admin/checkLogin', controller.admin.index.checkLogin);
  router.get('/admin/typeInfo', auth, controller.admin.index.getTypeInfo);
  router.post('/admin/article/add', auth, controller.admin.index.addArticle);
  router.post('/admin/article/update', auth, controller.admin.index.updateArticle);
  router.get('/admin/article/list', auth, controller.admin.index.getArticleList);
  router.get('/admin/article/delete/:id', auth, controller.admin.index.deleteArticle);
  router.get('/admin/getArticleById/:id', auth, controller.admin.index.getArticleById);
};