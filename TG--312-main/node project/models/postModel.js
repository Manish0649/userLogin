const mongoose=require('mongoose');

let postSchema = new mongoose.Schema({
    title:{
        type:String
    },
    file:{
        type:String
    },
    userId:{
        type:String,
        ref:"users"
    }
},{timestamps:true})
module.exports = mongoose.model('posts',postSchema)