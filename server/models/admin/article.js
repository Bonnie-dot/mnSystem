const mongoose =require('mongoose')
const Schema=mongoose.Schema;
let article=new Schema({
    tittle:{
        type:String
    },
    content:{
        type:String
    },
    tag:{
        type:String
    },
    create_date:{
        type:Date,
        default:Date.now
    }
})
mongoose.model('article',article);