var appRoot = require('app-root-path');
var bankModel = require(appRoot + '/_api/myHomes/Bank/bankModel');



//get all bank detail 
exports.getDetails = (queryString, callback) => {
    bankModel.find((err, result) => {
        if (err) {
            callback(null, err);
            return;
        } else {
            callback(null, result);
            return;
        }
    })
}

//get details by Id
exports.getDetailsById = (id,callback) => {
    bankModel.findById(id, (err, detail) => {
        if (err) {
            callback(null, detail);
            return;

        } else {
            if (detail == null) {
                let errorMsg = {
                    "msg": "No details Found"
                }
                callback(null, errorMsg);
                return;
            }
            else {
                callback(null, detail);
                return;
            }
        }
    })
}

//post create bank detail 
exports.postDetails = (detail, callback) => {
    console.log("createdDetail..!1111" )
    bankModel.create(detail, (err, createdDetail) => {
        if (err) {
            if (err.code === 11000) {

                err = {
                    "errType": "duplicate entry"
                }

                callback(null, err);
                return;
            }
            else { 
                callback(null, err);
                return;
            }
        }else
        {
            callback(null, createdDetail);
        }
    })

}

//patch details
exports.patchDetail = (id, detail, callback) => {
    console.log("id=" + id)
    bankModel.findById(id, (err, result) => {
        if (err) {
            callback(null, err);
            return;
        } else {
            if (result != null) {
                result.bankName = detail.bankName || result.bankName;
                result.ifscCode = detail.ifscCode || result.ifscCode;
                result.branchName = detail.branchName || result.branchName;
                result.accountNum = detail.accountNum || result.accountNum;
                result.bankId = detail.bankId || result.bankId
                result.lastUpdated = Date.now();

                //save in database 
                result.save((err, result) => {
                    if (err) {
                        callback(null, err);
                        return;
                    } else {
                        callback(null, result);
                        return;
                    }
                })
            }
            else {
                let response = {
                    msg: "Bank details not Found"
                }
                callback(null, response);
                return;
            }
        }

    })
}

//delete bank details
exports.deleteDetails = (id, callback) => {
    bankModel.findByIdAndRemove(id, (err, result) => {
        if (err) {
            callback(null, err);
            return;
        } else {
            if (result == null) {
                let response = { msg: "details are not found" }
                callback(null, response);
                return;
            } else {
                let response = {
                    msg: "succesfully delete your bank details ",
                    id: result._id
                };
                callback(null, response);
                return;
            }

        }
    })
}
