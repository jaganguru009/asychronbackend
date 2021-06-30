var appRoot = require('app-root-path');
const { response } = require('express');
var eventModel = require(appRoot +'/_api/Events/eventModel')


//get calender

exports.getEvent = (queryString,callback)=>{
    eventModel.find((err,event)=>{
        if(err){
            callback(null,err);
            return;
        }else{
          
            callback(null,event);
            return;
        }

    })
}

// get by id 
exports.getEventById = (id ,callback)=>{
    eventModel.findById(id,(err,event)=>{
        if(err){
            callback(null,err);
            return;
        }else{
            if(event == null){
                let response={
                    msg:"No data found "
                }
                callback(null,response);
                return;
            }else{
                callback(null,event);
                return;
            }

        }
    })
}


//getBy userName
exports.eventByUserName =(userName,callback)=>{
    eventModel.find().where('userName').equals(userName).exec((err,result)=>{
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
exports.eventPost=(event,callback)=>{
    eventModel.create(event,(err,createdEvent)=>{
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
            callback(null,createdEvent);
            return;
        }

    })
};


// update calender
exports.updateEvent = (id ,event, callback)=>{
    console.log("id="+id)
    eventModel.findById(id,(err,result)=>{
        if(err){
            callback(null,err);
            return;
        }else{
            if(result != null ){

                result.eventTitle = event.eventTitle || result.eventTitle;
                result.eventDesc  = event.eventDesc || result.eventDesc;
                result.eventDate = event.eventDate || result.eventDate;
                result.eventDate = event.eventDate || result.eventDate;
                result.calenderColor = event.calenderColor || result.calenderColor;

                

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
exports.eventDelete =(id,callback)=>{
    eventModel.findByIdAndRemove(id,(err,result)=>{
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