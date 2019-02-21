const mongoose = require('mongoose')
require('../../models/admin/link')
const Link = mongoose.model('link')
/**
 * @func 
 * @des 新增友情链接
 */
exports.insertLink = async ctx => {
  try {
    let temp = ctx.request.body
    let res =await Link.findOne({link_name:temp.name}).exec()
    if (res) {
      ctx.body = {
        success: false,
        code: 500,
        data: {
          msg: "创建友链已经存在",
        }
      }
      return false;
    }
    
    let data = new Link({
      link_name: temp.name,
      link_url: temp.url,
      link_author:temp.author
    })
    let r=await data.save()
    ctx.body = {
        success: true,
        code:200,
        data: {
            msg: "创建友链成功",
            res: r
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
* @dec 查询友链
*/
exports.queryLink=async ctx=>{
    try {
        let res=await Link.find().exec()
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
* @des 根据id删除友链
*/
exports.deleteLink=async ctx=>{
    try {
        let res=await Link.findOneAndDelete({_id:ctx.request.body.id}).exec()
        if(res){
            ctx.body = {
                success: true,
                code:200,
                data: {
                    msg:'删除友链成功'
                }
            }
        }else{
            ctx.body = {
                success: false,
                code:500,
                data: {
                    msg:'删除友链失败,不存在这个友链'
                }
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
