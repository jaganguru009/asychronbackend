var mongoose =require("mongoose")

var policiesSchema=mongoose.Schema(
    {
        name:String,
        hrPolicies:String
    }
)

var Policy=mongoose.exports=mongoose.model("users",policiesSchema);