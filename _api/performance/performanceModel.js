const { mongo } = require("mongoose")
var mongoose=require("mongoose ")

 var performanceSchema= mongoose.schema(
     {
        indicators:
        {
            dues:String,
            complaint:String,
            codingStandard:String,


        },
        goals:String,
        manageReview:String,
        hrReview:String,
        teamReview:String,
        performanceReview:Number
      }
 )
 var Performance=module.exports=mongoose.model("performances",performanceSchema)