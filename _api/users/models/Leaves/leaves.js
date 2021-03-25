var mongoose=require("mongoose")

var leavesSchema=mongoose.Schema(
    {
        leavesType:String,
        leavesPriod:Date,
        reason:String,


    }
)
var Leave=mongoose.exports=mongoose.Schema("users",leavesSchema)