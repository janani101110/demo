const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");
const UserSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true,
    },
    googleId:{
        type:String,
        required:false,
    },
    email:{
        type:String,
        required:false
    },
    profilePicture:{
        type:String,
        required:false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
    })

UserSchema.plugin(passportLocalMongoose);
UserSchema.plugin(findOrCreate);

module.exports=mongoose.model('User',UserSchema)
