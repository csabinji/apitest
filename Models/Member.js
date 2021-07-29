const mongoose = require('mongoose');

const Member = mongoose.model('Member',{
    Firstname : {
        type : String,
        required : true
    },
    Lastname : {
        type : String,
        required : true
    },
    Phonenumber : {
        type : String,
        required : true
    },
    Status : {
        type : String,
        enum : ['Admin','Employee']
    },
    Address : {
        type : String,
        required : true
    },
    Comission: {
        type : String,
        required : true
    },
    Username : {
        type : String,
        required : true,
        unique : true
    },
    Password : {
        type : String
    },
    isfirst : {
        type : Boolean,
        default : true
    },
    isActive:{
        type : Boolean,
        default : true
    },
    accountCreated : {
        type : String
    }
})

module.exports = Member;