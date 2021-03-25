var mongoose=require("mongoose")

var familySchema=mongoose.Schema(
    {
        name:String,
        occupation:String,
        relationship:String,
        address:String,
        phone:Number,

    }
)

var Family =mongoose.exports=mongoose.model("users",familySchema)