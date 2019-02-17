const mongoose=require('mongoose');
const auth=require('../../utils/token');
require('../../models/admin/user')
const User=mongoose.model('user_info')
/*
* 登录
*/
exports.login=async(ctx,next)=>{
    const {
        username,
        password
    }=ctx.request.body;
    let res=await User.findOne({username:username,password:password}).exec()
    if(res){
        let token=auth.sign(res);
        ctx.body={
            success:true,
            data:{
                msg:"登录成功",
                token:token,
                user:res
            }
        }
    }else{
        ctx.body={
            code:500,
            data:{
                msg:"用户名或者密码错误"
            }
            
        }
    }
}
/*
*获取管理员信息
*/
exports.getUserInfo=async(ctx,next)=>{
    let res=ctx.state.userInfo
    if(res){
        ctx.body={
            success:true,
            data:res
        }
    }else{
        ctx.body={
            code:500,
            data:{
                msg:"没有查到相关信息"
            }
            
        }
    }
}