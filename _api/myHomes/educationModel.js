var mongoose=require("mongoose")

var educationSchema=mongoose.Schema(
    {
         degree:String,
         specialization:String,
         qualification:String,
         board:String,
         datePassing:Date,
         percentage:Number


     }
)
var Education =module.exports=mongoose.model("education",educationSchema)