var appRoot = require('app-root-path');
var salDetailModel = require(appRoot +'/_api/salDetail/salDetailModel')


//get detail 
exports.getSalDetail=(queryString,callback)=>{
    salDetailModel.find((err,result)=>{

        if(err){
            callback(null,err);
            return;
        }else{
            callback(null,result);
            return;
        }
    })
};


//get by id
exports.getSalDetailById=(id,callback)=>{
    salDetailModel.findById(id,(err,result)=>{
        if(err){
            callback(null,err);
        }else{
            if(result == null){
                let response={
                    msg:"No data for find "
                }
                callback(null,response);
                return;
            }else{
                callback(null,result);
                return;
            }
        }
    })
};


//get by userName
exports.getSalDetailByUserName=(userName,callback)=>{
    salDetailModel.find().where('userName').equals(userName).exec((err,salDetail)=>{
        if(err){
            callback(null,err);
            return
        }else{
            callback(null,salDetail);
            return;
        }
    })
};


//post data 
exports.postSalDetail=(salDetail,callback)=>{
    salDetailModel.create(salDetail,(err,createdSalDetail)=>{
        if(err){
            if(err.code === 11000){
                let response={
                    msg:"duplicate entry "
                }
                callback(null,response)
                return;
            }else{
                callback(null,err);
                return
            }
        }else{
            callback(null,createdSalDetail);
            return;
        }
    })
};


//update your datya 

exports.patchSal=(id,salDetail,callback)=>{
    console.log("id="+id);
    salDetailModel.findById(id,(err,result)=>{
        if(err){
            callback(null,err);
            return;

        }else{
            if(result != null){

    result.empName = salDetail.empName || result.empName;
    result.designation = salDetail.designation || result.designation;
    result.doj = salDetail.doj || result.doj;
    result.panCard = salDetail.panCard || result.salDetail;
    result.leaveBal = salDetail.leaveBal || result.leaveBal;

    result.leaveWithoutPay = salDetail.leaveWithoutPay || result.leaveWithoutPay;
    result.noWorkingDays = salDetail.noWorkingDays || result.noWorkingDays;
    result.totalWorkDays = salDetail.totalWorkDays || result.totalWorkDays;
    result.Earnings = salDetail.Earnings || result.Earnings;
    result.amountA = salDetail.amountA || result.amountA;

    result.deduction = salDetail.deduction || result.deduction;
    result.amountB = salDetail.amountB || result.amountB;
    result.totalA = salDetail.totalA || result.totalA;
    result.netPay = salDetail.netPay || result.netPay;
    result.totalB = salDetail.totalB || result.totalB ;

    result.basicSal = salDetail.basicSal || result.basicSal;
    result.houseRent =salDetail.houseRent || result.houseRent;
    result.ConveyanceAllow = salDetail.ConveyanceAllow ||result.ConveyanceAllow;
    result.medical = salDetail.medical || result.medical;
    result.lTa = salDetail.lTa || result.lTa;
    result.specialPay1 = salDetail.specialPay1 || result.specialPay1;
    result.specialPay2 = salDetail.specialPay2 || result.specialPay2;
    result.cityCompensantoryAllow = salDetail.cityCompensantoryAllow || result.cityCompensantoryAllow;
    result.otherEar =salDetail.otherEar || result.otherEar;
    result.quarterlyPerformanceBonus = salDetail.quarterlyPerformanceBonus || result.quarterlyPerformanceBonus;

   result.profTax = salDetail.profTax || result.profTax;
    result.incomeTax = salDetail.incomeTax || result.incomeTax;
    result.otherDedu = salDetail.otherDedu || result.otherDedu;


    result.taxDetails = salDetail.taxDetails || result.taxDetails;
    result.form = salDetail.form || result.form;
    
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
            msg:"No data for update "
        }
        callback(null,response);
        return;
    }

    }
 })
}

//delete sal data 
exports.deleteSalDetail=(id,callback)=>{
    salDetailModel.findByIdAndRemove(id,(err,result)=>{
        if(err){
            callback(null,err);
            return;

        }else{
            if(result == null){
                let response={
                    msg:"No data  found  for delete "
                }
                callback(null,response);
                return;
            }else{
                let response={
                    msg:"succesfully data delete ",
                    id:result._id
                }
                callback(null,response);
                return;
            }

        }
    })

}
