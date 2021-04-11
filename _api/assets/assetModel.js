var mongoose=require("mongoose")

var assetSchema=mongoose.Schema(
    {
        assetName:{
            type:String,
             required:true
        },
        assetType:{
            type:String,
            required:true,
        },
        issueDate:{
            type:Date
        }
    }
)
var Asset=module.exports=mongoose.model('assets',assetSchema)
//module.export =Asset;