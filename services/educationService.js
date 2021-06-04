var appRoot = require('app-root-path');
var educationModel = require(appRoot + '/_api/myHomes/Education/educationModel');


// get education details 
exports.getEduDetail = (queryString,callback) => {
    educationModel.find((err, result) => {
        if (err) {
            callback(null, err);
            return;
        } else {
            callback(null, result);
            return;
        }


    })
}

//get education detail by id
exports.getEduDetailById = (id, callback) => {
    educationModel.findById(id, (err, result) => {
        if (err) {
            callback(null, err);
        } else {
            if (result == null) {
                let response = {
                    msg: "no data found by id"
                }
                callback(null, response);
                return;
            } else {
                callback(null, result);
                return;
            }
        }
    })

}


//get education by userName 
exports.getEduDetailByUserName=(userName,callback)=>{
    educationModel.find().where('userName').equals(userName).exec((err,eduDetails)=>{
      if(err){
        callback(null,err);
        return;
      }else{
        callback(null,eduDetails);
        return;
      }
    })
  }
  
  

//post education detail 
exports.postEduDetail = (edudetail, callback) => {
    educationModel.create(edudetail, (err, createdEdu) => {
        if (err) {
            if (err.code === 11000) {
                let response={
                    msg: "duplicate entry of data "
                }
                callback(null, response);
                return;
            }
           

        } else {
            callback(null, createdEdu)

        }
    })

}

//update education detail
exports.patchEduDetail=(id,education,callback)=>{
    console.log("id="+id);
    educationModel.findById(id,(err,result)=>{
        if(err){
            callback(null,err);
            return;
        }else{
            if(result != null){
                    result.degree   = education.degree ||result.degree
                    result.specialization = education.specialization || result.specialization
                    result.college =education.college || result.college
                    result.board        = education.board || result.board
                    result.datePassing  =education.datePassing || result.datePassing
                    result.percentage   = education.percentage || result.percentage

                    result.save((err,result)=>{
                        if(err){
                            callback(null,err);
                            return;
                        }else{
                            callback(null,result);
                        }
                    })
            }
            else{
                let response={
                    msg:"there is no Education data for update"
                }
                callback(null,response);
                return;

            }
        }
    })

}

//delete education data 
exports.deleteEdu=(id,callback)=>{
    educationModel.findByIdAndRemove(id,(err,result)=>{
        if(err){
            callback(null,err);
            return;
        }else{
            if(result == null ){
                let response={
                    msg:"no education data for remove"
                }
                callback(null,response);
                return;
            }else{
                let response={
                    msg:"succesfully delete your education data ",
                    id:result._id
                };
                callback(null,response);
                return;
            }
        }


    })
}
