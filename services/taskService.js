var appRoot = require('app-root-path');
var taskModel = require(appRoot + '/_api/Tasks/taskModel')

//get all taks 
exports.getTask = (querystring,callback) => {
    taskModel.find((err, result) => {
        if (err) {
            callback(null, err);
            return;
        } else {
            callback(null,result);
            return;
        }
    })

}

//get task By Id
exports.getTaskById = (id, callback) => {
    taskModel.findById(id, (err, task) => {
        if (err) {
            callback(null, err);
            return;
        } else {
            if (task == null) {
                var response = {
                    msg: "nO task available for you "
                }
                callback(null, response);
                return;
            } else {
                callback(null, task);
                return;
            }
        }
    })

}

//create task 

exports.postTask = (task, callback) => {
    taskModel.create(task, (err, createdTask) => {
        if (err) {
            if (err.code === 11000) {
                err = { "errorType": "task is already exit in list" }
            
            }
            callback(null,err);
            return;
        
        } else {
            callback(null, createdTask);
            return;
        }
    })

}







//delete task

exports.deleteTask = (id, callback) => {
    taskModel.findByIdAndRemove(id, (err, result) => {
        if (err) {
            callback(null, err);
            return;
        } else {
            if (result == null) {
                let response = {
                    msg: "No task available to delete"
                }
                callback(null, response)
                return;
            } else {
                let response = {
                    msg: "succecfully deleted your task form list ",
                    id : result._id

                }
                callback(null, response);
                return;

            }
        }
    })
}

//update task
exports.updateTask = (id, task, callback) => {
    console.log("id=" + id);

    taskModel.findById(id, (err, result) => {

        if (err) {
            callback(null, err);
            return;
        } else {
            if (result != null) {

                result.taskId = task.taskId                     || result.taskId
                result.description = task.description   || result.description
                result.title = task.title               || result.title
                result.dueTo = task.dueTo               || result.dueTo
                result.priority = task.priority         || result.priority
                result.toDo = task.toDo                 || result.toDo
                result.technicalReview = task.technicalReview || result.technicalReview
                result.deployedStatus = task.deployedStatus || result.deployedStatus

                //save data in db
                result.save((err,result)=>{
                    if(err){
                        callback(null,err);
                        return;
                    }else{
                        callback(null,result);
                        console.log("succesfully update your data")
                        return;
                    }

                })

            }else{
                let msg= {error:"No any task for you "};
                callback(null,msg);
                return;
            }

        }
    })
}


































































































