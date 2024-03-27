const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
        unique:true,
    },
    desc:{
        type:String,
        required:true,
        unique:true,
    },
    photo:{
        type:String,
        required:false,
    }
});

const Post =mongoose.model('Post',PostSchema);

module.exports=Post;