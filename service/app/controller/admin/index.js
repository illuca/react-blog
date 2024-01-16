'use strict';

const Controller = require('egg').Controller;

class MainController extends Controller {
  async index() {
    // article list on home page
    this.ctx.body = 'hi api';
  }

  async getTypeInfo() {
    const data = await this.app.mysql.select('type');
    this.ctx.body = {data: data};
  }

  async checkLogin() {
    let username = this.ctx.request.body.username;
    let password = this.ctx.request.body.password;
    const sql = `select username,password 
                 from admin_user 
                 where username='${username}' and password ='${password}';`;
    const res = await this.app.mysql.query(sql);
    if (res.length > 0) {
      //once login successfully, we cache it by session
      let openId = new Date().getTime();
      this.ctx.session.openId = openId;
      this.ctx.body = {data: 'ok'};
    } else {
      this.ctx.body = {data: 'Fail to login.'};
    }
  }

  async addArticle() {
    let article = this.ctx.request.body;
    const result = await this.app.mysql.insert('article', article);
    const insertId = result.insertId;
    this.ctx.body = {
      isSuccess: result.affectedRows === 1,
      insertId: insertId
    };
  }

  async updateArticle() {
    let article = this.ctx.request.body;
    const result = await this.app.mysql.update('article', article);
    this.ctx.body = {
      isSuccess: result.affectedRows === 1
    };
  }

  async getArticleList() {
    let sql = `
      select A.id, A.title, A.introduction, A.create_time createTime, A.view_count viewCount, T.type_name typeName
      from article A, type T
      where A.type_id = T.id;
    `;
    const resList = await this.app.mysql.query(sql);
    this.ctx.body = {list: resList};
  }

  async deleteArticle() {
    let id = this.ctx.params.id;
    const res = await this.app.mysql.delete('article', {'id': id});
    this.ctx.body = {data: res};
  }

  async getArticleById() {
    let id = this.ctx.params.id;
    let sql = `
      select A.type_id, A.title, A.content, A.introduction, A.create_time, A.view_count
      from article A, type T
      where A.type_id = T.id and A.id = ${id};
    `;
    const res = await this.app.mysql.query(sql);
    this.ctx.body = {data: res};
  }
}

module.exports = MainController;
