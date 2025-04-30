let mongo = require("mongoose")
let patient_collection = mongo.Schema({
    name :{
     type : String,
     required : true
    },
    // Email
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    phone_no:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    registration_date:{
        type:Date,
        default:Date.now
    }
})
module.exports =mongo.model ("patients",patient_collection);