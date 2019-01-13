const router=require('koa-router')();
const db=require('../db');
/*
* 登录
*/
router.post('/login',async ctx=>{
    try{
        let data=await db.queryDB('user_info',ctx.request.body);//无法接受reject，故try-catch
        ctx.body=data;
        data.length>0&&(ctx.session.userName=ctx.request.body.username);
    }catch(e){
        ctx.body=e;
    }
  
})
module.exports=router.routes();