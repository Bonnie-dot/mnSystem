const mongoose=require('mongoose')
require('../../models/admin/article')
const Article=mongoose.model('article')
/** 
* @func 
* 新增数据 
*/
exports.insertData=async ctx=>{
    try {
        console.log(11111);
        let article=new Article(ctx.request.body);
        let res=await article.save();
        ctx.body = {
            success: true,
            code:200,
            data: {
                msg: "新建文章成功",
                res: res
            }
        }
    } catch (error) {
        ctx.body = {
            success: false,
            code: 500,
            data: {
              msg: error,
            }
          }
    }
}