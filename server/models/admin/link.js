const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const link=new Schema({
    link_name:{
        type:String
    },
    link_url:{
        type:String
    },
    link_author:{
        type:String
    },
    create_time:{
        type:Date,
        default:Date.now()
    }
        
})
mongoose.model('link',link)