const mongoose=require('mongoose')
const Schema=mongoose.Schema
const tag=new Schema({
    tag_name:{
        type:String
    },
    create_time:{
        type:Date,
        default:Date.now()
    }
})
mongoose.model('Tag',tag)