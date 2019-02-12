const mongoose=require('mongoose')
const config=require('../config')
require('./user')
require('./visitor')
mongoose.connect(`mongodb://${config.mongodb.host}:${config.mongodb.prot}/${config.mongodb.database}`,{useNewUrlParser: true});
var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',_=>{
 console.log('we are connected!')
});
