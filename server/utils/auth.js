require('../models/admin/user')
const mongoose=require('mongoose')
const token=require('./token')
let User=mongoose.model('user_info')
module.exports=_=>{
 return async (ctx,next)=>{
    let t=ctx.headers['x-access-token'];
    if(!t){
        ctx.body={
            success:false,
            data:{
                msg:'NOTLOGIN'
            }
        }
    }else{
        try{
            const {
                username,
                userid,
                password
            }=token.verify(t)//验证token
            let res1=await User.findOne({username:username}).exec()
            let res2=await User.findOne({password:password}).exec()
            if(res1&&username&&userid,password&&res2){
               await next();
            }else{
                ctx.body={
                    success:false,
                    data:{
                        msg:'无效token,请重新登录',
                        code:401
                    }
                }
            }
        }catch(err){
            ctx.body={
                success:false,
                data:{
                    msg:err.message,
                    code:401
                }
            }
        }
    }
 } 
}