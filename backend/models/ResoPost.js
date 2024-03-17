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
        type: String,
    }
},{timestamps:false});

const ResoPost = mongoose.model('ResoPost', ResoPostSchema); 

module.exports = ResoPost; 