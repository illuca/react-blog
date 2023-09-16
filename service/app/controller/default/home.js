const {Controller} = require('egg');

class HomeController extends Controller {
  async index() {
    const {ctx} = this;

    ctx.body = 'index';
  }

  async getArticleList() {
    const {ctx} = this;
    let sql = `select A.id, A.title, A.introduction, A.create_time, A.view_count, T.type_name
from article A, type T
where A.type_id = T.id;`

    let result = await this.app.mysql.query(sql);
    ctx.body = result;
  }
  async getArticleById() {
    const {ctx} = this;
    const id = ctx.params.id;
    let sql = `select title, type_name, create_time, view_count, content
from article A,
     type T
where A.id = ${id}
  and A.type_id = T.id;`;

    let result = await this.app.mysql.query(sql);
    ctx.body = result;
  }
}

module.exports = HomeController;
