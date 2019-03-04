const mongoose =require('mongoose')
const Schema=mongoose.Schema;
let article=new Schema({
    title:{
        type:String
    },
    content:{
        type:String
    },
    create_date:{
        type:Date,
        default:Date.now
    },
    tag:[{//连接tags
        type:Schema.Types.ObjectId,
        ref:'Tag'
    }]
})
mongoose.model('article',article);