'use strict';

const Controller = require('egg').Controller

class MainController extends Controller {
  async index() {
    // article list on home page
    this.ctx.body = 'hi api'
  }

  async getTypeInfo() {
    const data = await this.app.mysql.select('type')
    this.ctx.body = {data: data}
  }

  async checkLogin() {
    let username = this.ctx.request.body.username
    let password = this.ctx.request.body.password
    const sql = `select username,password 
                 from admin_user 
                 where username='${username}' and password ='${password}';`
    const res = await this.app.mysql.query(sql)
    if (res.length > 0) {
      //once login successfully, we cache it by session
      let openId = new Date().getTime()
      this.ctx.session.openId = openId
      this.ctx.body = {data: 'ok'}
    } else {
      this.ctx.body = {data: 'Fail to login.'}
    }
  }

  async addArticle() {
    let article = this.ctx.request.body
    const result = await this.app.mysql.insert('article', article)
    const insertId = result.insertId
    this.ctx.body = {
      isSuccess: result.affectedRows === 1,
      insertId: insertId
    }
  }

  async updateArticle() {
    let article = this.ctx.request.body
    const result = await this.app.mysql.update('article', article);
    this.ctx.body = {
      isSuccess: result.affectedRows === 1
    }
  }
}

module.exports = MainController
