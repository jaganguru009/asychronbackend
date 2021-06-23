var appRoot = require('app-root-path');
var timesheetModel = require(appRoot + "/_api/Timesheet/timesheetModel");


//get timesheet
exports.getTimesheet=(querstring,callback)=>{
     timesheetModel.find((err,result)=>{
         if(err){
             callback(null,err);
             return;
         }else{
             callback(null,result);
             return;
         } 
     })
}

//get by id 
exports.getTimesheetById=(id,callback)=>{
    timesheetModel.findById(id,(err,result)=>{
        if(err){
            callback(null,err);
            return;
        }else{
            if(result == null){
                let response={
                    msg:"No data found by Id"
                };
                callback(null,response);
                return;
            }else{
                callback(null,result);
                return;
            }
        }
    })

}

// get by userName 
/*
exports.getTimesheetByUserName=(userName,callback)=>{
    timesheetModel.find().where("userName").equals(userName).exce ((err,Timesheet)=>{

        if(err){
            callback(null,err);
            return;
        }else{
            callback(null,Timesheet);
            return;
        }
    })
}
*/
exports.getTimesheetByUserName = (userName, callback) => {
    
      timesheetModel.find()
      .where("userName")
      .equals(userName)
      .exec((err, Timesheet) => {
        if (err) {
          callback(null, err);
          return;
        } else {
          //console.log("order by agent & status " + JSON.stringify(orders));
          callback(null, Timesheet);
          return;
        }
      });
  };
  

//post timesheet 
exports.postTimesheet=(Timesheet,callback)=>{
    timesheetModel.create(Timesheet,(err,createdTimesheet)=>{
        if(err){
            if(err.code === 11000){
                let response={ 
                    msg:"data alredy exit"
                };
                callback(null,response);
                return;

             }else{
            callback(null,err);
            return;
            }
        }else
        {
            callback(null,createdTimesheet);
            return;
        }
    })
}

//update timesheet
exports.patchTimesheet=(id,Timesheet,callback)=>{
    console.log("id="+id)
    timesheetModel.findById(id,(err,result)=>{
        if(err){
            callback(null,err);
            return;
        }else{
            if(result != null){

  result.date = Timesheet.date || result.date;

  result.selectWeek = Timesheet.selectWeek || result.selectWeek;
  result.notes = Timesheet.notes || result.notes;
  result.project = Timesheet.project || result.project;
  result.department = Timesheet.department || result.department;
  result.tasks = Timesheet.tasks || result.tasks ;

  result.mon =Timesheet.mon || result.mon ; 
  result.tue = Timesheet.tue || result.tue;
  result.wed =Timesheet.wed || result.wed;
  result.thu =Timesheet.thu || result.thu;
  result.fri =Timesheet.fri || result.fri;
  result.sat =Timesheet.sat || result.sat;
  result.sun =Timesheet.sun || result.sun;

  result.total = Timesheet.total || result.total;
  result.startDate =Timesheet.startDate || result.startDate;
  result.endDate = Timesheet.endDate || result.endDate;
  result.status = Timesheet.status || result.status;
  result.period = Timesheet.period || result.period;

  result.submitOn =Timesheet.submitOn || result.submitOn;

        result.save((err,result)=>{
            if(err){
                callback(null,err);
                return;
            }else{
                callback(null,result);
                return;
            }
        })


            }else{
                let response={
                    msg:"No data for update"
                }
                callback(null,response);
                return;
            }

        }
    })
};

//delete timesheet
exports.deleteTimesheet=(id,callback)=>{
    timesheetModel.findByIdAndRemove(id,(err,result)=>{
        if(err){
            callback(null,result);
            return;
        }else{
            if(result == null){
                let response={
                    msg:"No data found for delete"
                }
                callback(null,response);
                return;

            }else{
                let response={
                    msg:"succesfully data deleted ",
                    id :result._id
                }
                callback(null,response);
                return;
                
            }
        }
    })
}