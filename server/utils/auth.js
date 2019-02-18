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
                userid
            }=token.verify(t)//验证token
            let res=await User.findOne({username:username}).exec()
            if(res&&username&&userid){
                ctx.state.userInfo=res;
               await next();
            }else{
                ctx.body={
                    success:false,
                    data:{
                        msg:'invalid token',
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