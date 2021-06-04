var appRoot = require('app-root-path');
const { response } = require('express');
var certificateModel = require(appRoot + "/_api/myHomes/Certificate/certificationModel");

// get all certificates 
exports.getCertificate = (queryString, callback) => {
    certificateModel.find((err, result) => {
        if (err) {
            callback(null, err);
            return;
        } else {
            callback(null, result);
            return;
        }

    })
}

//get Certificate by id 
exports.getCertificateById = (id, callback) => {
    certificateModel.findById(id, (err, result) => {
        if (err) {
            callback(null, err);
            return;
        } else {
            if (result == null) {
                let response = { msg: "No data found of Id" }

                callback(null, response);
                return;
            } else {
                callback(null, result);
                return;
            }
        }

    })

}

//get certificate bby username
exports.getCertificateByUserName =  (userName, callback) =>{ 
    certificateModel.find().where('userName').equals(userName).exec((err, certificates) => {
            if (err) {
                callback(null, err);
                return;
            } else {
                //console.log("order by agent & status " + JSON.stringify(orders));
                callback(null, certificates);
                return;
            }
        });
}


//post certificate 
exports.postCertificate = (certificate, callback) => {
    certificateModel.create(certificate, (err, createdCert) => {
        if (err) {
            if (err.code === 11000) {
                response = {
                    msg: "duplicate entry ....data alreday exit "
                }

            }
            callback(null, response);
            return;

        } else {
            callback(null, createdCert);
            return;

        }
    })
}

//update certificate 
exports.patchCertificate = (id, cert, callback) => {
    console.log("id=" + id)
    certificateModel.findById(id, (err, result) => {
        if (err) {
            callback(null, err);
            return;

        }
        else {
            if (result != null) {

                result.name = cert.name || result.name;
                result.description = cert.description || result.description;
                result.typeCertificate = cert.typeCertificate || result.typeCertificate;

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

        }
    })
}

//delete certificate
exports.deleteCert = (id, callback) => {
    certificateModel.findByIdAndRemove(id, (err, result) => {
        if (err) {
            callback(null, err);
            return;

        } else {
            if (result == null) {
                let response = {
                    msg: "No Certificate found for delete"
                }
                callback(null, err);
                return;

            }
            else {
                let response = {
                    msg: "succesfully deleted your certificate",
                    id: result._id
                };
                callback(null, response);
                return;

            }

        }
    })

}