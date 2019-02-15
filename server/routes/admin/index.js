const router=require('koa-router')()
const user=require('./user')
router.use('/user',user)
module.exports=router.routes()
//添加一个前缀 admin 
//只需要在index.js中引入admin即可 