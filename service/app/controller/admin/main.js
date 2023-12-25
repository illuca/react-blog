'use strict';

const Controller = require('egg').Controller

class MainController extends Controller{
  async index(){
    // article list on home page
    this.ctx.body='hi api'
  }
  async checkLogin() {
    console.log(this.ctx.request)
    let username = this.ctx.request.body.username
    let password = this.ctx.request.body.password
    const sql = `select username,password 
                 from admin_user 
                 where username='${username}' and password ='${password}';`
    const res = await this.app.mysql.query(sql)
    console.log(sql)
    if(res.length>0){
      //once login successfully, we cache it by session
      let openId=new Date().getTime()
      this.ctx.session.openId={ 'openId':openId }
      this.ctx.body={data:'ok','openId':openId}
    }else{
      this.ctx.body={data:'Fail to login.'}
    }
  }
}

module.exports = MainController
