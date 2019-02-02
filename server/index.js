const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const router=require('koa-router')()
const bodyParser=require('koa-bodyparser')
const session = require('koa-session');
const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const admin=require('./model/admin/admin');
const passport=require('koa-passport');
//session
app.keys = ['some secret hurr'];
app.use(session({}, app));
//body-parseer
app.use(bodyParser());
//authentication
require('./auth')
app.use(passport.initialize())
app.use(passport.session())
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
