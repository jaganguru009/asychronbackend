var mongoose=require("mongoose")

var leavesSchema=mongoose.Schema(
    {
        leavesType:{
            type:String,
            required:true
        },
        leavesPeriod:{
            type:String, 
            required:true
        },
        reason:{
            type:String,
            required:true
         },
         userName:String


    }
)
var Leave=module.exports=mongoose.model("leaves",leavesSchema);