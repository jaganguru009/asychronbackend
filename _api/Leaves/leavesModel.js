var mongoose=require("mongoose")

var leavesSchema=mongoose.Schema(
    {
        leavesType:{
            type:String,
            required:true
        },
        leaveFrom:Date,
        leaveTo:Date,
        status:{
            type:String,
            default:"pending"
        },     
        reason:{
            type:String,
            required:true
         },
         userName:String


    }
)
var Leave=module.exports=mongoose.model("leaves",leavesSchema);