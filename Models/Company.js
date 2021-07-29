const mongoose = require('mongoose');

const Company = mongoose.model('Company',{
    company_fullname : {
        type : String,
        required : [true, 'Enter Company full name'],
        trim : true
    },
    cylinder_name : {
        type : String,
        required : [true, 'Enter Cylinder name'],
        trim : true
    },
    address : {
        type : String,
        required : [true, 'Enter address']
    },
    phone_number : {
        type : String,
        required : [true, 'Enter phone number'],
        unique : true
    },
    isActive:{
        type : Boolean,
        default : true
    },
    joinedAt: {
        type: Date,
        default: Date.now,
      }
})

module.exports = Company;