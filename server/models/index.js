const mongoose=require('mongoose')
const config=require('../config')
const md5=require('md5')
require('./admin/user')
const User = mongoose.model('user_info')
mongoose.connect(`mongodb://${config.mongodb.host}:${config.mongodb.prot}/${config.mongodb.database}`,{useNewUrlParser: true})
var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',async _=>{
 console.log(`mongodb://${config.mongodb.host}:${config.mongodb.prot}/${config.mongodb.database} connect is successfull`)
   let admin=await User.findOne({username:'Bonnie'});
   if(!admin){
       config.user.password=md5(config.user.password)
        let user=new User(config.user)
        let res=await user.save();
   }
});
