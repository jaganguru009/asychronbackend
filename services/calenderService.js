var appRoot = require('app-root-path');
const { response } = require('express');
var calenderModel = require(appRoot +'/_api/calender/calenderModel')


//get calender

exports.getCalender = (queryString,callback)=>{
    calenderModel.find((err,calender)=>{
        if(err){
            callback(null,err);
            return;
        }else{
          
            callback(null,calender);
            return;
        }

    })
}

// get by id 
exports.getCalenderById = (id ,callback)=>{
    calenderModel.findById(id,(err,calender)=>{
        if(err){
            callback(null,err);
            return;
        }else{
            if(calender == null){
                let response={
                    msg:"No data found "
                }
                callback(null,response);
                return;
            }else{
                callback(null,calender);
                return;
            }

        }
    })
}


//getBy userName
exports.calenderByUserName =(userName,callback)=>{
    calenderModel.find().where('userName').equals(userName).exec((err,result)=>{
        if(err){
            callback(null,err);
            return;
        }else{
            callback(null,result);
            return;
        }
    })
}

//post calender
exports.calenderPost=(calender,callback)=>{
    calenderModel.create(calender,(err,createdCalender)=>{
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
            callback(null,createdCalender);
            return;
        }

    })
};


// update calender
exports.updateCalender = (id ,calender, callback)=>{
    console.log("id="+id)
    calenderModel.findById(id,(err,result)=>{
        if(err){
            callback(null,err);
            return;
        }else{
            if(result != null ){

                result.eventTitle = calender.eventTitle || result.eventTitle;
                result.eventDesc  = calender.eventDesc || result.eventDesc;
                result.eventDate = calender.eventDate || result.eventDate;

                result.holidayDesc = calender.holidayDesc || result.holidayDesc;
                result.holidayDate = calender.holidayDate || result.holidayDate;
                result.newsTitle = calender.newsTitle || result.newsTitle;
                result.news = calender.news || result.news;


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
exports.calenderDelete =(id,callback)=>{
    calenderModel.findByIdAndRemove(id,(err,result)=>{
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