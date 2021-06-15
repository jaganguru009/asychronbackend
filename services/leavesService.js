const appRoot = require("app-root-path");
const leavesModel = require(appRoot + "/_api/Leaves/leavesModel");

exports.getLeaves = (queryString, callback) => {
  //querystring is using for convert querystring into JSON object.

  //result = response from leaves

  leavesModel.find((err, result) => {
    if (err) {
      // this is error is for database while searching data
      callback(null, err);
      return;
    } else {
      callback(null, result);
      return;
    }
  });
};

exports.getLeavesById = (id, callback) => {
  leavesModel.findById(id, (err, leave) => {
    if (err) {
      // this is an error for database while searching data
      callback(null, err);
      return;
    } else {
      if (leave == null) {
        var response = {
          message: "no leaves data found ",
        };
        callback(null, response);
      } else {
        callback(null, leave);
        return;
      }
    }
  });
};

//get by username
exports.getLeaveByUserName = (userName, callback) => {
  leavesModel
    .find()
    .where("userName")
    .equals(userName)
    .exec((err, leaves) => {
      if (err) {
        callback(null, err);
        return;
      } else {
        //console.log("order by agent & status " + JSON.stringify(orders));
        callback(null, leaves);
        return;
      }
    });
};

// create leaves application for employe

exports.postLeave = (leave, callback) => {
  leavesModel.create(leave, (err, createdLeave) => {
    if (err) {
      if (err.code === 11000) {
        err = {
          errorType: "already exit ...plz try new",
        };
        callback(null, err);
        return;
      }

      callback(null, err);
      return;
    } else {
      callback(null, createdLeave);
      return;
    }
  });
};

//Update an leave application

exports.patchLeave = (id, leave, callback) => {
  console.log("id=" + id);

  leavesModel.findById(id, (err, result) => {
    //database err handling
    if (err) {
      callback(null, err);
      return;
    } else {
      if (result != null) {
        result.leavesType = leave.leavesType || result.leavesType;
        result.reason = leave.reason || result.reason;
        result.leaveFrom = leave.leaveFrom || result.leaveFrom;
        result.leaveTo = leave.leaveTo || result.leaveTo;
        result.status = leave.status || result.status;

        //save updated info data in db
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
        let msg = { err: "no leaves found" };
        callback(null, msg);
        return;
      }
    }
  });
};

exports.deleteLeave = (id, callback) => {
  leavesModel.findByIdAndRemove(id, (err, result) => {
    if (err) {
      callback(null, err);
      return;
    } else {
      if (result == null) {
        let response = {
          message: "no leaves found",
        };
        callback(null, response);
        return;
      } else {
        let response = {
          message: "succesfully deleted your leaves data ",
          id: result._id,
        };
        callback(null, response);
        return;
      }
    }
  });
};
