var mongoose = require("mongoose")

var taskSchema = mongoose.Schema(
    { 
        taskId: Number,
        description: String,
        title: String,
        dueTo: String,
        priority: String,
        toDo: String,
        technicalReview: String,
        deployedStatus: Boolean,

    }
)
 
var Task = module.exports = mongoose.model("taskes", taskSchema)
