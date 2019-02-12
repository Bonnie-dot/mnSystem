const dev=require('./dev.config')
const pro=require('./pro.config')
module.exports=process.env.NODE_ENV=="development"?dev:pro;