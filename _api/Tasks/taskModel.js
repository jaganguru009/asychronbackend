var mongoose=require("mongoose")

var taskSchema=mongoose.Schema(
    {
        
        
            taskId:{
                type:Number
               
            },
            description:String,
            title:String,
            dueTo:Date,
            priority:String

        ,
        toDo:String,
        technicalReview:String,
        deployedStatus:Boolean,

     }
)

var Task=module.exports=mongoose.model("tasks",taskSchema)
