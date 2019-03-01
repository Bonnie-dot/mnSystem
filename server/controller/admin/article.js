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
/**
* @func 
* @des 查询（id,关键字，日期）
*/
exports.queryArticle=async ctx=>{
    let {id,limit=10,page=1,searchKeys,time}=ctx.request.body,
        queryOption={};
        let reg=new RegExp(searchKeys,i)
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
        let all=(await Article.find(queryOption).exec()).length
        Article.find(queryOption)
    } catch (error) {
        
    }
}