const mongoose = require('mongoose');
const blogPostSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
        
    },
    photo:{
        type:String,
        required:false,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    updatedAt:{
        type: Date,
        default: Date.now,
    }
});

const blogPost =mongoose.model('blogPost',blogPostSchema);

module.exports=blogPost;