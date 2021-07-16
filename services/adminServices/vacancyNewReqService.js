var appRoot = require("app-root-path");
var newRequestModel = require(appRoot +
  "/_api/adminAPI/vacancies/newRequests/newRequestModel");

// get newRequest
exports.getNewRequest = (queryString, callback) => {
  newRequestModel.find((err, result) => {
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
exports.getbNewRequestById = (id, callback) => {
  newRequestModel.findById(id, (err, result) => {
    if (err) {
      callback(null, err);
      return;
    } else {
      if (result == null) {
        let response = {
          msg: "No found data id",
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
exports.postNewRequest = (newRequest, callback) => {
  newRequestModel.create(newRequest, (err, createdNewRequest) => {
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
      callback(null, createdNewRequest);
      return;
    }
  });
};

//update my position
exports.patchNewRequest = (id, newRequest, callback) => {
  console.log("id=" + id);
  newRequestModel.findById(id, (err, result) => {
    if (err) {
      callback(null, err);
      return;
    } else {
      if (result != null) {
        result.title = newRequest.title || result.title;
        result.opSkillSet = newRequest.opSkillSet || result.opSkillSet;
        result.employmentType =
          newRequest.employmentType || result.employmentType;
        result.project = newRequest.project || result.project;
        result.designation = newRequest.designation || result.designation;
        result.experience = newRequest.experience || result.experience;
        result.mSkillSet = newRequest.mSkillSet || result.mSkillSet;
        result.budget = newRequest.budget || result.budget;
        result.education = newRequest.education || result.education;
        result.approvers = newRequest.approvers || result.approvers;
        result.dueDate = newRequest.dueDate || result.dueDate;
        result.department = newRequest.department || result.department;
        result.status = newRequest.status || result.status;

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

// delete  newRequest
exports.deleteNewRequest = (id, callback) => {
  newRequestModel.findByIdAndRemove(id, (err, result) => {
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
          msg: "succesfully delete your new vacancy req data",
          id: result._id,
        };
        callback(null, response);
        return;
      }
    }
  });
};
