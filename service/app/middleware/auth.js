const {status} = require('../utils/constants');
module.exports = options => {
  return async function auth(ctx, next) {
    if (ctx.session.openId) {
      await next()
    } else {
      ctx.body = {data: status.NOT_SIGNED_IN}
    }
  }
}