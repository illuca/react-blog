const {Controller} = require('egg');

class HomeController extends Controller {
  async index() {
    const {ctx} = this;

    ctx.body = 'index';
  }

  async getArticleById() {
    const {ctx} = this;
    const id = ctx.query.id;

    let sql = `select title, type_name, create_time, view_count, content
from article A,
     type T
where A.id = ${id}
  and A.type_id = T.id;`;

    ctx.body = await this.app.mysql.query(sql);
  }

  async getTypes() {
    const {ctx} = this;
    let sql = `select * from type;`
    ctx.body = await this.app.mysql.query(sql);
  }

  async getArticlesByTypeId() {
    const {ctx} = this;
    const typeId = ctx.query.typeId;
    let sql;
    if (!typeId || typeId === '0') {
      // home
      sql = `select A.id, A.title, A.introduction, A.create_time, A.view_count, T.type_name
from article A, type T
where A.type_id = T.id;`
    } else {
      sql = `select A.id, A.title, A.introduction, A.create_time, A.view_count, T.type_name
from article A, type T
where A.type_id = T.id and T.id=${typeId}`;
    }
    ctx.body = await this.app.mysql.query(sql);
  }
}

module.exports = HomeController;
