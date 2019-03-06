const router=require('koa-router')()
const article=require('./article')
router.use('/article',article)
module.exports=router.routes()
