require('../models/admin/user')
const mongoose=require('mongoose')
const token=require('./token')
let User=mongoose.model('user_info')
module.exports=_=>{
 return async (ctx,next)=>{
      debugger
    let t=ctx.get('token');
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
            let res=User.findOne({username:username}).exec()
            if(res&&username&&userid){
               await next();
            }else{
                ctx.body={
                    success:false,
                    data:{
                        msg:'invalid token'
                    }
                }
            }
        }catch(err){
            ctx.body={
                success:false,
                data:{
                    msg:err
                }
            }
        }
    }
 } 
}