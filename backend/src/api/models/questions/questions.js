const mongoose = require('mongoose');

// Extracting the Schema class from mongoose
const schema = mongoose.Schema;

// Defining the schema for regular users
const questionsSchema = new schema({
    userId:{
        type:schema.Types.ObjectId,
       // required:true,
    },
    title:{
        type:String,
        required:true,
    },
    problem:{
        type:String,
        required:true,
    },

    commentsCount:{
        type:Number,
        default:0
    },

    viewCount:{
        type:Number,
        default:0
    },
    date:{
        type:Date,
        required:true,
    }

    
})


// Exporting the mongoose model for regular users based on the defined schema
module.exports = mongoose.model('Questions', questionsSchema)