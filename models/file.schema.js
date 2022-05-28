const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    filename:{
        type:String,
        unique:true,
        required:true,
    },
    path:{
        type:String,
        
        required:true,
    },
    size:{
        type:String,
        
        required:true,
    },
    uuid:{
        type:String,
        
        required:true,
    },
    sender:{
        type:String,
        
        required:false,
    },
    receiver:{
        type:String,
        
        required:false,
    },

},{timestamps:true});

const fileModel = mongoose.model("files",schema);

module.exports = fileModel;