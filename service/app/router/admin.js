module.exports = app => {
  const {router, controller} = app
  const auth = app.middleware.auth();
  router.get('/admin/index', controller.admin.index.index);
  router.post('/admin/checkLogin', controller.admin.index.checkLogin);
  router.get('/admin/getTypeInfo', auth, controller.admin.index.getTypeInfo);
  router.post('/admin/addArticle', auth, controller.admin.index.addArticle);
  router.post('/admin/updateArticle', auth, controller.admin.index.updateArticle);
}