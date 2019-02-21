const mongoose=require('mongoose')
require('../../models/admin/tag')
const Tag=mongoose.model('Tag')
/** 
* @func 
* @des 新建标签 
*/
exports.insertTagData=async(ctx,next)=>{
    try {
        let name=ctx.request.body.name;
        let data=await Tag.findOne({tag_name:name}).exec()
        if(data){
            ctx.body = {
                success: false,
                code:500,
                data: {
                    msg: "创建标签已经存在",
                }
            }
            return false;
        }
        let tag=new Tag({
            tag_name:name
        })
        let res=await tag.save();
        ctx.body = {
            success: true,
            code:200,
            data: {
                msg: "创建标签成功",
                res: res
            }
        }
    } catch (error) {
        ctx.body = {
            success: false,
            code:500,
            data: {
                msg: error,
            }
        }
    }

}
/** 
*@func 
*@des 读取标签数据 
*/
exports.queryTags=async (ctx,next)=>{
    try {
        let res=await Tag.find().exec();
        if(res.length>0){
            ctx.body = {
                success: true,
                code:200,
                data: {
                    res: res
                }
            }
        }else{
            ctx.body = {
                success: false,
                code:500,
                data: {
                    msg: '当前没有标签数据',
                }
            }
        }
    } catch (error) {
        ctx.body = {
            success: false,
            code:500,
            data: {
                msg: error,
            }
        }
    }
}