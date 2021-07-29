const mongoose = require('mongoose');

const ResellerStock = mongoose.model('ResellerStock',{
    ResellerReceiptNo : {
        type : String,
        required : true
    },
    ResellerID : {
        type : String,
        required : [true, "Enter ID"]
    },
    Gas_state : {
        type : String,
        enum: ["Full", "Half", "Empty"],
        required : [true, "Select Gas State"],
        trim : true
    },
    Regular_Prima : {
        type : Number
    },
    Regular_Kamakhya : {
        type : Number
    },
    Regular_Suvidha : {
        type : Number
    },
    Regular_Others : {
        type : Number
    },
    Leak_Prima : {
        type : Number
    },
    Leak_Kamakhya : {
        type : Number
    },
    Leak_Suvidha : {
        type : Number
    },
    Leak_Others : {
        type : Number
    },
    Sold_Prima : {
        type : Number
    },
    Sold_Kamakhya : {
        type : Number
    },
    Sold_Suvidha : {
        type : Number
    },
    Sold_Others : {
        type : Number
    },
    SendOrReceive : {
        type : String,
        enum : ["Send", "Receive"],
        required : [true, "Select status"]
    },
    Amount : {
        type : String,
        required : [true, "Enter Amount"]
    },
    Remarks : {
        type : String,
        required : [true, "Enter your opinion"]
    },
    StockAddedAt: {
        type: Date,
        default: Date.now,
    },
    Entryby : {
        type : String,
        required : true
    }
})

module.exports = ResellerStock;