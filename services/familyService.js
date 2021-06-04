var appRoot = require("app-root-path");
const { response } = require("express");
var familyModel = require(appRoot + '/_api/myHomes/Family/familyModel');


//get family details 
exports.getFamily = (queryString,callback) => {
    familyModel.find((err, result) => {
        if (err) {

            callback(null, err);
            return;

        } else {
            callback(null, result);
            return;

        }
    })

}

//get family details by id 
exports.getFamilyById = (id, callback) => {
    familyModel.findById(id, (err, result) => {
        if (err) {
            callback(null, err);
            return;
        } else {
            if (result == null) {
                let response = {
                    msg: "no family detail found"
                }
                callback(null, response);
                return;

            } else {
                callback(null, result);
                console.log("here is your family data ")
                return;
            }
        }

    })
}

exports.getFamilyByUserName =  (userName, callback) =>{ 
    familyModel.find().where('userName').equals(userName).exec((err, family) => {
            if (err) {
                callback(null, err);
                return;
            } else {
                //console.log("order by agent & status " + JSON.stringify(orders));
                callback(null, family);
                return;
            }
        });
}





//post family details
exports.postFamily = (family, callback) => {
    familyModel.create(family, (err, createdFamily) => {
        if (err) {
            if (err.code === 11000) {
                err = {
                    msg: "duplicate entry of data "
                }
                callback(null, err);
                return;
            }
         } else {
                callback(null, createdFamily);
                return;
            }
        
    })
}

//patch family detail
exports.patchFamily = (id, family, callback) => {
    console.log("id=" + id)
    familyModel.findById(id, (err, result) => {
        if (err) {
            callback(err);
            return;
        } else {
            if (result != null) {
                result.name = family.name || result.name
                result.occupation = family.occupation || result.occupation
                result.relationship = family.relationship || result.relationship
                result.address = family.address || result.address
                result.phone = family.phone || result.phone

                result.save((err, result) => {
                    if (err) {
                        callback(null, err);
                        return;
                    } else {
                        callback(null, result)
                    }
                })
            }else{
                let response={
                    msg:"No data found for Update"
                }
                callback(null,response);
                return;
            }
        }
    })
}

//delete family data by id
exports.deleteFamily=(id,callback)=>{
    familyModel.findByIdAndRemove(id,(err,result)=>{
        if(err){
            callback(null,err);
            return;
        }else{
            if(result == null){
                let response={msg:"No Family data for delete "}
            
            callback(null,response);
            return;
            }else{
                let response = {
                    message: " successfully deleted family data",
                    id: result._id
                };
                callback(null, response);
                return;
            }
        }
    })

} 
