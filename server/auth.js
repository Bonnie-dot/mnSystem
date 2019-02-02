const passport = require('koa-passport')
const LocalStrategy = require('passport-local').Strategy
const db = require('./db')
const tablename = "user_info"
const ObjectID = require('mongodb').ObjectID;
const getUser = (param) => {
  return new Promise((resolve, reject) => {
    db.queryDB(tablename, param).then(data => {
      resolve(data.msg);
    }, e => {
      reject(e);
    })
  })
}
passport.serializeUser(function (user, done) {//save session
  done(null, user._id);
})

passport.deserializeUser(async function (id, done) {//read session
  getUser({ '_id': ObjectID(id) }).then(data => {
    if (data.length > 0) {
      let user = data[0];
      done(null, user);
    } else {
      done(null, false,'用户名或者密码错误');
    }
  }, err => {
    done(null,false,'数据库连接失败');
  });
})
passport.use(new LocalStrategy(async function (username, password, done) {
  getUser({ username: username, password: password }).then(data => {
    if (data.length > 0&&Array.isArray(data)) {
      let user = data[0];
      done(null, user);
    } else {
      done(null, false,'用户名或者密码错误');
    }
  }, err => {
    done(null,false,'数据库连接失败');
  });
}))
