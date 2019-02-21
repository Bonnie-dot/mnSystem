const router=require('koa-router')()
const auth=require('../../utils/auth')
const Tag=require('../../controller/admin/tag')
router.post('/createTagData',auth(),Tag.insertTagData)
      .get('/queryTags',auth(),Tag.queryTags);
module.exports=router.routes()