var mongoose=require("mongoose")

var bankSchema=mongoose.Schema(
    {
        
            bankName:String,
            ifscCode:String,
            branchName:String,
            accountNum:Number,
             bankId:String
     }
)
var Bank=module.exports=mongoose.model('banks',bankSchema)