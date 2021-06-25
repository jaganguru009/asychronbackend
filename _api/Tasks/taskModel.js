var mongoose = require("mongoose")

var taskSchema = mongoose.Schema(
    {   
        userName:String,
        description: String,
        title: String,
        dueDate:Date,
        priority: String,
        status:String
    },{
        //timestamps:true
    }
)
 
var Task = module.exports = mongoose.model("taskes", taskSchema)
