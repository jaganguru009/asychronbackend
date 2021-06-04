var mongoose =require("mongoose")

var policiesSchema=mongoose.Schema(
    {
        userName:String,
        name:String,
        hrPolicies:String
     }
)

var Policy=module.exports=mongoose.model("policies",policiesSchema);