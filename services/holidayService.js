var appRoot = require('app-root-path');
const { response } = require('express');
var holidayModel = require(appRoot +'/_api/Holidays/holidayModel')


//get 

exports.getHoliday = (queryString,callback)=>{
    holidayModel.find((err,holiday)=>{
        if(err){
            callback(null,err);
            return;
        }else{
          
            callback(null,holiday);
            return;
        }

    })
}

// get by id 
exports.getHolidayById = (id ,callback)=>{
    holidayModel.findById(id,(err,holiday)=>{
        if(err){
            callback(null,err);
            return;
        }else{
            if(holiday == null){
                let response={
                    msg:"No data found "
                }
                callback(null,response);
                return;
            }else{
                callback(null,holiday);
                return;
            }

        }
    })
}


//getBy userName
exports.holidayByUserName =(userName,callback)=>{
    holidayModel.find().where('userName').equals(userName).exec((err,result)=>{
        if(err){
            callback(null,err);
            return;
        }else{
            callback(null,result);
            return;
        }
    })
}

//post 
exports.holidayPost=(holiday,callback)=>{
    holidayModel.create(holiday,(err,createdHoliday)=>{
        if(err){
            if(err.code === 11000){
                let response={
                    msg:"Duplicate entry"
                }
                callback(null,response);
                return;
            }else{
                callback(null,err);
                return;
            }
        }else{
            callback(null,createdHoliday);
            return;
        }

    })
};


// update 
exports.updateHoliday = (id ,holiday, callback)=>{
    console.log("id="+id)
    holidayModel.findById(id,(err,result)=>{
        if(err){
            callback(null,err);
            return;
        }else{
            if(result != null ){

                result.holidayDesc  = holiday.holidayDesc || result.holidayDesc;
                result.holidayDate = holiday.holidayDate || result.holidayDate;
                result.calenderColor = holiday.calenderColor || result.calenderColor;

                

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
                let response = {
                    msg:"No data found for update"
                }
                callback(null,response)
                return;
            }
        }
    });
}


// delete calender
exports.holidayDelete =(id,callback)=>{
    holidayModel.findByIdAndRemove(id,(err,result)=>{
        if(err){
            callback(null,result);
            return;
        }else{
            if(result == null ){
                let response={
                    msg:"No data found for delete"
                }
                callback(null,response);
                return;
            }else{
                let response={
                    msg:"Succesfully delete data ",
                    id:result._id
                }
                callback(null,response);
                return;
            }
        }
    })
}