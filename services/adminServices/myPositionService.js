var appRoot = require("app-root-path");
var myPositionModel = require(appRoot +
  "/_api/adminAPI/hiring/myPosition/myPositionModel");

// get myPosition
exports.getMyPosition = (queryString, callback) => {
  myPositionModel.find((err, result) => {
    if (err) {
      callback(null, err);
      return;
    } else {
      callback(null, result);
      return;
    }
  });
};

// get by id
exports.getMyPositionById = (id, callback) => {
  myPositionModel.findById(id, (err, result) => {
    if (err) {
      callback(null, err);
      return;
    } else {
      if (result == null) {
        let response = {
          msg: "No found MyPosition data id",
        };
        callback(null, response);
        return;
      } else {
        callback(null, result);
        return;
      }
    }
  });
};

// post my positon
exports.postMyPositionModel = (myPosition, callback) => {
  myPositionModel.create(myPosition, (err, createdMyPosition) => {
    if (err) {
      if (err.code == 11000) {
        let response = {
          msg: "duplicate entry of data",
        };
        callback(null, response);
        return;
      }
      callback(null, err);
      return;
    } else {
      callback(null, createdMyPosition);
      return;
    }
  });
};

//update my position
exports.patchMyPosition = (id, myPosition, callback) => {
  console.log("id=" + id);
  myPositionModel.findById(id, (err, result) => {
    if (err) {
      callback(null, err);
      return;
    } else {
      if (result != null) {
        result.candidateName = myPosition.candidateName || result.candidateName;
        result.contactNumber = myPosition.contactNumber || result.contactNumber;
        result.email = myPosition.email || result.email;
        result.availabilty = myPosition.availabilty || result.availabilty;
        result.hrFeedBack = myPosition.hrFeedBack || result.hrFeedBack;
        result.hrRating = myPosition.hrRating || result.hrRating;

        //save result
        result.save((err, result) => {
          if (err) {
            callback(null, err);
            return;
          } else {
            callback(null, result);
            return;
          }
        });
      } else {
        let response = {
          msg: "No data found by id for update",
        };
        callback(null, response);
        return;
      }
    }
  });
};

// delete  myposition
exports.deleteMyPosition = (id, callback) => {
  myPositionModel.findByIdAndRemove(id, (err, result) => {
    if (err) {
      callback(null, err);
      return;
    } else {
      if (result == null) {
        let response = {
          msg: "No my Position id found for delete ",
        };
        callback(null, response);
        return;
      } else {
        let response = {
          msg: "succesfully delete your my positon data",
          id: result._id,
        };
        callback(null, response);
        return;
      }
    }
  });
};
