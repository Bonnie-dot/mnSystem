const router=require('koa-router')()
const user=require('../../controller/admin/user')
const auth=require('../../utils/auth')
router.post('/login',user.login)
      .post('/getUserInfo',auth(),user.getUserInfo)
      .post('/uploadImg',auth(),user.uploadImg)
      
module.exports=router.routes();