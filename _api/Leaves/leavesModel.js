var mongoose=require("mongoose")

var leavesSchema=mongoose.Schema(
    {
        leavesType:{
            type:String,
            required:true
        },
        leavesPriod:{
            type:Date,
            required:true
        },
        reason:{
            type:String,
            required:true
         }


    }
)
var Leave=module.exports=mongoose.Schema("leaves",leavesSchema);