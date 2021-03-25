var mongoose=require("mongoose")

var assetSchema=mongoose.Schema(
    {
        name:String,
        type:String,
        issueDate:Date
    }
)
var Assets=mongoose.exports=mongoose.model("users",assetSchema)
