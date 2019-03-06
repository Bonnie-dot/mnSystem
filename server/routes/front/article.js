const router=require('koa-router')()
const article=require('../../controller/front/article')
const auth=require('../../utils/auth')
router.post('/queryArticle',article.queryArticle)
       .post('/findArticleById',article.findArticleById)
    
module.exports=router.routes()