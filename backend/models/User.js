const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");
const UserSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true,
    },
    userId:{
        type:String,
        required:false,
        unique:true
    },
    email:{
        type:String,
        required:false,
        unique: false
    },
    profilePicture:{
        type:String,
        required:false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
    })

UserSchema.plugin(passportLocalMongoose);
UserSchema.plugin(findOrCreate);

module.exports=mongoose.model('User',UserSchema)
