const mongoose = require('mongoose')

const projectpostSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        //unique: true
    },
    email:{
        type: String,
        required: true,
        //unique: true
    },
    project_name:{
        type: String,
        required: true,
        unique: true
    },
    components:{
        type: String,
        required: true,
        //unique: true
    },
    objectives:{
        type: String,
        required: true,
        //unique: true
    },
    intro:{
        type: String,
        required: true,
        //unique: true
    },
    project_photo:{
        type: String,
        required: true,
        //unique: true
    },
    project_video:{
        type: String,
        required: true,
        //unique: true
    },
    explanation:{
        type: String,
        required: true,
        //unique: true
    },
    circuit_diagram:{
        type: String,
        required: true,
        //required:false;
        //unique: true
    },
    pcb_design:{
        type: String,
        required: true,
        //unique: true
    },
    git_link:{
        type: String,
        required: true,
        //unique: true
    },
    keywords:{
        type: String,
        required: true,
        //unique: true
    },
},{timestamps:true})

module.exports = mongoose.model("Projectpost",projectpostSchema)