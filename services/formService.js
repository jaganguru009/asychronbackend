var appRoot = require('app-root-path');
var formModel = require(appRoot + '/_api/forms/formModel');


//get forms from db
exports.getForms = (querystring, callback) => {
    formModel.find((err, result) => {
        if (err) {
            callback(null, err)
            return;
        } else {
            callback(null, result)
            return;
        }

    })

}


//get forms by id from db
exports.getFormsById = (id, callback) => {
    formModel.findById(id, (err, form) => {
        if (err) {
            callback(null, err);
            return;
        } else {
            if (form == null) {
                var response = {
                    msg: "form is not found "
                }
                callback(null, response)
                return;

            } else {
                callback(null, form);
                return;
            }
        }
    })
}


//create form 

exports.postForm = (form, callback) => {
    formModel.create(form, (err, createdForm) => {
        if (err) {
            if (err.code === 11000) {
                err = {
                    "errorType": "already exit formId...plz try new"
                }
            }
            callback(null, err);
            return;
        } else {
            callback(null, createdForm)
        }
    })

}

//update form 
exports.patchForm = (id, form, callback) => {
    console.log("id=" + id);

    formModel.findById(id, (err, result) => {
        if (err) {
            callback(null, err);
            return;
        } else {
            if (result != null) {
                result.formId = form.formId || result.formId
                result.formName = form.formName || result.formName
                result.formType = form.formType || result.formType
                result.status = form.status || result.status
                result.actions = form.actions || result.actions

                //save updated data in db
                result.save((err, result) => {
                    if (err) {
                        callback(null, err);
                        return;
                    } else {
                        callback(null,result);
                        console.log("succesfully update your data ")
                        return;
                    }
                })
            } else {
                let msg = { err: "no forms found here" }
                callback(null, msg);
                return;
            }
        }
    }) 

}


//delete formss 
exports.deleteForm = (id, callback) => {
    formModel.findByIdAndRemove(id, formId,(err, result) => {
        if (err) {
            callback(null, err);
            return;
        } else {
            if (result == null) {
                let response = { msg: "no form  found " }
                callback(null, response);
                return;
            } else {
                let response = {
                    msg: "succesfully deleted your form ",
                    id: result._id,
                    formId :result._formId
                }
                callback(null, response);
                return;

            }
        }
    })
}