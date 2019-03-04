const mongoose=require('mongoose')
require('../../models/admin/article')
const Article=mongoose.model('article')
/** 
* @func 
* 新增数据 
*/
exports.insertData=async ctx=>{
    try {
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
/**
* @func 
* @des 查询（id,关键字，日期）
*/
exports.queryArticle=async ctx=>{
    let {id,limit=10,page=1,searchKeys,time}=ctx.request.body,
        queryOption={};
        let reg=new RegExp(searchKeys,'i')
    if(id){
        queryOption={
            _id:id
        };
    }else if(searchKeys){
        queryOption={
            $or:[{
                title:{
                    $regex:reg
                }
            },{
                content:{
                    $regex:reg
                }
            }]
        }
    }
    try {
        let total=(await Article.find(queryOption).countDocuments().exec())
        let res=await Article.find(queryOption).populate({
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
* des 根据id删除文章 
*/
exports.deleteArticleById=async ctx=>{
    try {
        let res=await Article.findByIdAndDelete(ctx.request.body);
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
/**
 * @func 
 * 根据id更新文章
 * 
 */
exports.updateArticleById=async ctx=>{
    try {
        let res=await Article.findByIdAndUpdate(ctx.request.body.id,ctx.request.body.param);
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
