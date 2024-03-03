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
    timespans:{
        type:String,
        required:false,
    }
    })

UserSchema.plugin(passportLocalMongoose);
UserSchema.plugin(findOrCreate);

module.exports=mongoose.model('User',UserSchema)
