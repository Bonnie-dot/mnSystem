const mongoose = require('mongoose')
const auth = require('../../utils/auth')
require('../../models/admin/visitor')
const Visitor = mongoose.model('Visitor')
const tools = require('../../utils/tool')
/**
* @func
* @des 查询访客今天访问量和总访问量
*/
exports.queryVisitorNumber = async (ctx, next) => {
    try {
        var obj = tools.formateDate(Date.now(), true);
        let res1 = await Visitor.find({ visited_time: { $gte: obj.today, $lt: obj.tomorrow } });
        let res2 = await Visitor.estimatedDocumentCount({});
        ctx.body = {
            success: true,
            code: 200,
            data: {
                currentNumber: res1.length,
                totalNumber: res2
            }
        }
    } catch (err) {
        ctx.body = {
            success: false,
            code: 500,
            data: {
                msg: err
            }
        }
    }

}
/**
* @func
* @des 新增访客信息 待续...
*/
exports.insertVisitor = async (ctx, next) => {
    try {
        var visitor = new Visitor({
            ip: '127.0.0.1',
            referrer: '',
            visited_url: 'admin/user',
        });
        let res = await visitor.save();
        ctx.body = {
            success: true,
            code: 200,
            data: {
                msg: '新建访客成功',
                user: res
            }
        }
    } catch (error) {
        ctx.body = {
            success: false,
            code: 500,
            data: {
                msg: err
            }
        }
    }

}
/** 
* @func 
* @des 访客人数列表 按当前年月份返回
*/
exports.queryNumberList = async (ctx, next) => {
    //拿到当前年 按月显示列表
    let time = tools.getCurrentYearBoundary();
    //let res=await Visitor.find({visited_time:{$gte:time.startTime,$lte:time.endTime}})
    let res = await Visitor.aggregate([
        { $match: { visited_time: { $gt: new Date(time.startTime), $lt: new Date(time.endTime) } } },// 限制日期当年
        {
            $group: {
                _id:'$visited_time',
                _id:{month:{$month:new Date('$visited_time')}},// 按月统计数量
                count:{$sum:1}
             },
        }]).exec()
    console.log(res)
}