const router=require('koa-router')()
const article=require('../../controller/admin/article')
const auth=require('../../utils/auth')
router.post('/insertArticleData',auth(),function(){
    console.log(333333333)
})
module.exports=router.routes()