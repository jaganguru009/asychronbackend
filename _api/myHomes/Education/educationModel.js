var mongoose=require("mongoose")

var educationSchema=mongoose.Schema(
    {
         degree:String,
         specialization:String,
         college:String,
         board:String,
         datePassing:Date,
         percentage:Number,
         userName:String


     }
)
var Education =module.exports=mongoose.model("education",educationSchema)