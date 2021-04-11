var mongoose =require("mongoose")

var policiesSchema=mongoose.Schema(
    {
        name:String,
        hrPolicies:String
     }
)

var Policy=module.exports=mongoose.model("policies",policiesSchema);