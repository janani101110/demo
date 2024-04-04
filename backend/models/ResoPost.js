const mongoose = require('mongoose');

const ResoPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        required: true,
        unique: true,
    },
    photo: {
        type: String,
        required: false,
    },
    username:{
        type: String,
        required: false,
    },
    userId:{
        type: String,
        required: false,
    },
    categories:{
        type: [String],
        required: false,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
},{timestamps: true});

const ResoPost = mongoose.model('ResoPost', ResoPostSchema); 

module.exports = ResoPost;
