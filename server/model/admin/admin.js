const router=require('koa-router')()
const db=require('../../db')
const passport=require('koa-passport')
/*
* 登录
*/
router.post('/login',async ctx=>{
    return passport.authenticate('local', function(err, user, info, status) {
        if (user === false) {
          ctx.body = { success: false,msg:info };
        } else {
          ctx.body = { success: true,user};
          return ctx.login(user)
        }
      })(ctx)
});
module.exports=router.routes();