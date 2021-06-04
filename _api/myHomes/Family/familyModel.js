var mongoose=require("mongoose")

var familySchema=mongoose.Schema(
    {
        name:String,
        occupation:String,
        relationship:String,
        address:String,
        phone:Number,
        userName:String

     }
)

var Family =module.exports=mongoose.model("familes",familySchema);