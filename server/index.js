const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const router = require('koa-router')()
const path = require('path')
const koaBody = require('koa-body')
const app = new Koa()
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000
const admin = require('./routes/admin')
const front=require('./routes/front')
const server = require('koa-static')
const fs=require('fs')
let uploadUrl=path.join(__dirname,'/public/upload')
//koa-body 参数
app.use(koaBody({
  multipart:true,
  maxFieldsSize:10*1024,
  formidable: {
    uploadDir:uploadUrl,
    keepExtensions: true,// 保持扩展名
    onFileBegin:() => { // 文件上传前的设置 删除之前的头像
      
      fs.readdir(uploadUrl,(err,files)=>{
        files.forEach(filename=>{
          let curpath=path.join(uploadUrl,filename);
          fs.unlinkSync(curpath)
        })
      })
    }
  }
}));
//静态资源
app.use(server(path.join(__dirname, './public')));
// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  router.use('/admin', admin);
  router.use('/front',front);
  app.use(router.routes()).use(router.allowedMethods());
  app.use(ctx => {
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset

    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
