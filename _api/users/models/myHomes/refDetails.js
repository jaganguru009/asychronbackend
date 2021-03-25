var mongoose =require("mongoose")

var refDetails=mongoose.Schema(
    {
        refernces:{
            refId:{
                type:String,
                unique:true
            },
            name:String,
            title:String,
            email:String,
            mobile:Number,
            company:String
        }
    }
)
var refernces=mongoose.exports=mongoose.model("User",refDetails)