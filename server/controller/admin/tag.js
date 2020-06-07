const mongoose=require('mongoose')
require('../../models/admin/tag')
const Tag=mongoose.model('Tag')
/** 
* @func 
* @des 新建标签 
*/
exports.insertTagData=async(ctx)=>{
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
exports.queryTags=async (ctx)=>{
    try {
        let res=await Tag.find().exec();
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
            code:500,
            data: {
                msg: error,
            }
        }
    }
}
/**
* @func 
* @des 删除标签
*/
exports.deleteTag=async(ctx)=>{
    try {
        let res=await Tag.findOneAndDelete({_id:ctx.request.body.id}).exec()
        if(res){
            ctx.body = {
                success: true,
                code:200,
                data: {
                    msg:'删除标签成功'
                }
            }
        }else{
            ctx.body = {
                success: false,
                code:500,
                data: {
                    msg:'删除标签失败,不存在这个标签'
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