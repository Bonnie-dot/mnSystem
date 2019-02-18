const mongoose=require('mongoose')
const auth=require('../../utils/auth')
require('../../models/admin/visitor')
const Visitor=mongoose.model('Visitor')
/*
*查询访客今天访问量和总访问量
*/
exports.queryVisitorNumber=async(ctx,next)=>{
    let res1=await Visitor.estimatedDocumentCount({visited_time:new Date()});
    let res2=await Visitor.estimatedDocumentCount({});
    ctx.body={
        success:true,
        data:{
           currentNumber:res1,
           totalNumber:res2
        }
    }
}
/*
*新增访客信息 待续...
*/
exports.insertVisitor=async (ctx,next)=>{
    // var visitor=new Visitor({
    //     ip:'127.0.0.1',
    //     referrer:'',
    //     visited_url:'admin/user',
    // });
    let res=await visitor.save();
    ctx.body={
        success:true,
        data:{
            msg:'新建访客成功',
            user:res
        }
    }
}
/*
 * 访客人数列表 按当前年月份返回 待续
*/
exports.queryNumberList=async(ctx,next)=>{

}