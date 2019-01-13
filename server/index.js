const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const router=require('koa-router')()
const bodyParser=require('koa-bodyparser')
const session = require('koa-session');
const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const admin=require('./api/admin');
app.use(bodyParser());
app.keys = ['some secret hurr'];
 
const CONFIG = {
  key: 'koa:sess', 
  maxAge: 86400000,
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};
 
app.use(session(CONFIG, app));
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
  app.use(async (ctx,next)=>{//拦截登录 没有做好
    if(!ctx.session.userName&&ctx.originalUrl.indexOf('/login')==-1){
      ctx.redirect='/login';
    }
    await next();
   
  })
  router.use('/admin',admin);
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
