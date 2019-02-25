const mongoose = require('mongoose');
const auth = require('../../utils/token');
require('../../models/admin/user')
const User = mongoose.model('user_info')
const path = require('path')
/**
* @func
* @des 用户登录
*/
exports.login = async (ctx, next) => {
    try {
        const {
            username,
            password
        } = ctx.request.body;
        let res = await User.findOne({ username: username, password: password }).exec()
        if (res) {
            let token = auth.sign(res)
            res.avator = ctx.origin + '/img/' + res.avator
            this.updateLoginInfoByID(res);
            ctx.body = {
                success: true,
                code: 200,
                data: {
                    msg: "登录成功",
                    token: token,
                    user: res
                }
            }
        } else {
            ctx.body = {
                success: false,
                code: 500,
                data: {
                    msg: "用户名或者密码错误"
                }

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
* @des 获取管理员信息
*/
exports.getUserInfo = async (ctx, next) => {
    try {
        let res = ctx.state.userInfo
        res.avator = ctx.origin + '/img/' + res.avator
        if (res) {
            ctx.body = {
                success: true,
                code: 200,
                data: res
            }
        } else {
            ctx.body = {
                success: false,
                code: 500,
                data: {
                    msg: "没有查到相关信息"
                }

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
* @des 更新用户登录信息(最近一次登录时间、登录时间)通过ID
* @param {object} user 用户信息
*/
exports.updateLoginInfoByID = async (user) => {
    await User.where({ _id: user._id }).updateOne({ last_login_time: user.login_time, login_time: Date.now() });
}
/**
* @func
* @des 上传头像
*/
exports.uploadImg = async ctx => {
    try {
        var imgPath = ctx.request.files.file.path
        let idx = imgPath.indexOf('/upload')
        //********************更新数据库头像*******************************/
        // let str = path.join(ctx.origin,path.join(imgPath.slice(idx)))
        let str=ctx.origin+imgPath.slice(idx);
        ctx.body = {
            success: true,
            code: 200,
            data: str
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