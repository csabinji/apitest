const mongoose = require('mongoose');

const Reseller = mongoose.model('Reseller',{
    reseller_fullname : {
        type : String,
        required : [true, 'Enter Reseller full name'],
        trim : true
    },
    pasal_name : {
        type : String,
        required : [true, 'Enter Pasal name'],
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
    rateforReseller : {
        type : String,
        required : [true, 'Enter rate for reseller']
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

module.exports = Reseller;