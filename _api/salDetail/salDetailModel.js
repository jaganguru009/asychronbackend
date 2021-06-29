var mongoose = require("mongoose");
require('mongoose-type-url');

var salDetailSchema = mongoose.Schema({

    userName:String,
    empName:String,
    designation:String,
    doj:Date,
    panCard:String,
    leaveBal:Number,

    leaveWithouPay:Number,
    noWorkingDays:Number,
    TotalWorkDays:Number,
    Earnings:{
        basicSal:Number,
        houseRent:Number,
        ConveyanceAllow:Number,
        medical:Number,
        lTa:Number,
        specialPay1:Number,
        specialPay2:Number,
        cityCompensantoryAllow:Number,
        otherEar:Number,
        quarterlyPerformanceBonus:Number
    },
       deduction:{ profTax:Number,
        incomeTax:Number,
        otherDedu:Number
       },
    
    amountA:Number,

    deduction:String,
    amountB:Number,
    TotalA:Number,
    netPay:Number,
    TotalB:Number,

    taxDetails:{
        type:mongoose.SchemaTypes.Url
    },
    form:{
        type:mongoose.SchemaTypes.Url
    }
    




})

 var SalDetail = (module.exports=mongoose.model("salDetails",salDetailSchema));