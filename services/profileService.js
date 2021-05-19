var appRoot = require('app-root-path');
var { where } = require('../_api/myHomes/Profile/profileModel');
var profileModel = require(appRoot + '/_api/myHomes/Profile/profileModel')

//get all profile of user 
exports.getProfile = (queryString, callback) => {
    profileModel.find((err, result) => {
        if (err) {
            callback(null, err);
            return;
        } else {
            callback(null, result);
            return;
        }

    })

}

//get profile by id
exports.getProfileById = (id, callback) => {
    profileModel.findById(id, (err, result) => {
        if (err) {
            callback(null, err);
            return;
        } else {
            if (result == null) {
                let response = { msg: "No Profile found  " }
                callback(null, response);
                return;
            } else {
                callback(null, result);
                console.log("here is your profile")
                return;
            }
        }
    })
}

//create  profile 
exports.postProfile = (profile, callback) => {
    profileModel.create(profile, (err, createdProfile) => {
        if (err) {
            if (err.code === 11000) {
                err = {
                    "errtype": "duplicate Profile"
                }
            }
            callback(null, err);
            return;

        } else {
            callback(null, createdProfile);
            return;
        }
    })


}

//update data in profile model 
exports.patchProfile = (id, profile, callback) => {
    console.log("id=" + id);
    profileModel.findById(id, (err, result) => {
        if (err) {
            callback(null, err);
            return;
        } else {
            if (result != null) {

                result.userName = profile.userName || result.userName;
                result.empCode = profile.empCode || result.empCode;
                result.email = profile.email || result.email;
                result.deparatment = profile.deparatment || result.deparatment;
                result.designation = profile.designation || result.designation;


                result.employeType = profile.employeType || result.employeType;
                result.shiftEmp = profile.shiftEmp || result.shiftEmp;
                result.doj = profile.doj || result.doj;
                result.lastUpdatedBy = Date.now();

                //save updated data in profile 
                result.save((err, result) => {
                    if (err) {
                        callback(null, err);
                        return;
                    } else {
                        callback(null, result);
                        return;

                    }
                })
            } else {
                let errorMsg = {
                    msg: "No profile found for update "
                }
                callback(null, errorMsg);
                return;
            }
        }
    })

}




//delete profile 
exports.deleteProfile = (id, lastUpdatedBy, callback) => {
    profileModel.findByIdAndRemove(id, (err, result) => {
        if (err) {
            callback(null, err);
            return;
        } else {
            if (result == null) {
                let response = {
                    " msg": "No Profile found"
                }
                callback(null, response);
                return;
            } else {
                let response = {
                    " msg": "succesfully deleted your profile",
                    id: result._id,

                }
                callback(null, response);
                return;
            }
        }

    })
}

//get profile by userName 
exports.getProfileByUserName = (profile, callback) => {
    profileModel.find().where('userName').equals(userName).exec((err, profiles) => {
        if (err) {
            callback(null, err);
            return;
            //this err means err while serarching in db so 500 status 
        } else {
            var userIds = [];

            if (profiles.length > 0) {

                callback(null, profiles[0]);
                return;

            } else {

                callback(null, []);
                return;
            }
        }
    })

}
