var mongoose=require("mongoose")

var bankSchema=mongoose.Schema(
    {
        bankAcc:{
            bankName:String,
            ifscCode:String,
            branchAdd:String,
            account_no:Number,
        },
        bankId:String
     }
)
var Bank=module.exports=mongoose.model('banks',bankSchema)