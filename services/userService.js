var appRoot = require('app-root-path');
var userModel = require(appRoot + '/_api/users/userModel'); 

exports.getUsers = function (queryString, callback) {
    //var results = "response from user get";
    userModel.find((err, results) => {
        if (err) {
            // Note that this error doesn't mean nothing was found,
            // it means the database had an error while searching, hence the 500 status
            callback(null, err);
            return;
        } else {
            // send the list of all people
            callback(null, results);
            return;
        }
    });
}

exports.getUserById = function (id, callback) {
    userModel.findById(id, (err, user) => {
        if (err) {
            // Note that this error doesn't mean nothing was found,
            // it means the database had an error while searching, hence the 500 status
            callback(null, err);
            return;
        } else {
            if (user == null) {
                var response = {
                    "message": "No user found"
                }
                callback(null, response);
                return;
            }
            else {
                callback(null, user);
                return;
            }
        }
    });
}

exports.postUser = function (user, callback) {
    userModel.create(user, function (err, createdUser) {
        if (err) {
            if (err.code === 11000) {
                err = {
                    "errorType": "Duplicate UserName",
                    "errorText": "Same user name is available in the database,try new one"
                }
            }
            callback(null, err);
            return;
        }
        else {  
            callback(null, createdUser);
            return;
        }

    }
    );
}
exports.signIn = function (user, callback) {
    userModel.find({
        $and: [
            { $and: [{ userName: user.userName }] },
            { $and: [{ password: user.password }] }
        ]
    }, function (err, results) {
        if (err) {
            callback(null, err);
        }
        else {
            if (results.length > 0) {
                callback(null, true);
            }
            else {
                callback(null, false);

            }
        }
        // if (results.length == 0) {
        //     return false;
        // } else {
        //     return true;
        // }
    });

}

exports.patchUser = function (id, user, callback) {
    console.log("id = " + id)
    userModel.findById(id, (err, result) => {
        // Handle any possible database errors
        if (err) {
            callback(null, err);
            return;
        } else { 
                        if (result != null) { 
                            result.password = user.password || result.password;
                            result.name = user.name || result.name;
                            result.email = user.email || result.email;
                            result.phone = user.phone || result.phone;
                            result.empCode = user.empCode || result.empCode;
                            result.role = user.role || result.role;
                            result.department = user.department || result.department;
                            result.status = user.status || result.status;
                            result.lastUpdatedBy = user.lastUpdatedBy || result.lastUpdatedBy;
                            result.service = user.service || result.service;
                            result.FCMToken = user.FCMToken || result.FCMToken;
                            //result.FCMToken = (user.FCMToken!=undefined) ? user.FCMToken:result.FCMToken;
                            result.isLoggedIn = (user.isLoggedIn != undefined) ? user.isLoggedIn : result.isLoggedIn;

                            //result.created = user.created || result.created;
                            result.lastUpdated = Date.now();


                            // Save the updated document back to the database
                            result.save((err, result) => {
                                if (err) {
                                    callback(null, err);
                                    return;
                                }
                                else { 
                                    callback(null, result);
                                    return;
                                }

                                // res.status(200).send(res);
                            });

                        }
                        else {
                            let errorMsg = { err: "User NOt Found." }
                            callback(null, errorMsg);
                            return;
                        }
                    }

                }); 
        }
 




exports.deleteUser = function (id, lastUpdatedBy, callback) {
    userModel.findByIdAndRemove(id, (err, result) => {
        // We'll create a simple object to send back with a message and the id of the document that was removed
        // You can really do this however you want, though.
        if (err) {
            callback(null, err);
            return;
        } else {
            if (result == null) {
                let response = {
                    message: "user not found"
                };
                callback(null, response);
                return;
            }
            else { 
                let response = {
                    message: "user successfully deleted",
                    id: result._id
                };
                callback(null, response);
                return;
            }

        }
    })
}
 
exports.getUsersByUserName = function (userName, callback) {
    userModel.find().where('userName').equals(userName).exec((err, users) => {
        if (err) {
            // Note that this error doesn't mean nothing was found,
            // it means the database had an error while searching, hence the 500 status
            callback(null, err);
            return;
        } else {
            var userIds = [];
            if (users.length > 0) {

                callback(null, users[0]);
                return;
            }
            else {
                callback(null, []);
                return;
            }


        }
    });
}