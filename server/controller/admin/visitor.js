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
    try {
        let time = tools.getCurrentYearBoundary();
        let res = await Visitor.aggregate([
            { $match: { visited_time: { $gte: new Date(time.startTime), $lte: new Date(time.endTime) } } },// 限制日期当年
            {
                $group: {
                    _id: {$month: '$visited_time'},// 按月统计
                    count: { $sum: 1 }// 数量累加
                },
            },
            { $sort : { _id : 1} },// 按照id排序
        ]).exec();
        var resObj = {
            time: [],
            data: []
        };
        res.forEach(v => {
            resObj.time.push(v._id + '月');
            resObj.data.push(v.count);
        });
        ctx.body = {
            success: true,
            code: 200,
            data: {
                res: resObj
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