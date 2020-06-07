const mongoose=require('mongoose')
require('../../models/admin/article')
const Article=mongoose.model('article')
/**
* @func 
* @des 查询（分页查询）
*/
exports.queryArticle=async ctx=>{
    let {limit=10,page=1}=ctx.request.body,
        queryOption={}
        limit=Number(limit)
        page=(page-1)*limit||0
    try {
        let total=(await Article.find().countDocuments().exec())
        let res=await Article.find().populate({
            path:'tag',//关联字段
            select:'tag_name'//返回字段
        }).skip(page)
          .limit(limit)
          .sort({create_time:-1})
          .exec();
        ctx.body = {
            success: true,
            code:200,
            data: {
                res: res,
                total:total
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
/**
* @func 
* 根据id查询文章  
*/
exports.findArticleById=async ctx=>{
    try {
        let res=await Article.findOne(ctx.request.body)
                .populate({
                    path:'tag',//关联字段
                    select:'tag_name'//返回字段
                })
        ctx.body = {
            success: true,
            code:200,
            data: {
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