var appRoot = require("app-root-path");
var myCandidateCreateScheduleModel = require(appRoot +
  "/_api/adminAPI/hiring/myCandidateCreateSchedule/myCandidateCreateScheduleModel");

// get myCandidateScheduleModel
exports.getCreateSchedule = (queryString, callback) => {
  myCandidateCreateScheduleModel.find((err, result) => {
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
exports.getCreateScheduleById = (id, callback) => {
  myCandidateCreateScheduleModel.findById(id, (err, result) => {
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
exports.postCreateSchedule = (schedule, callback) => {
  myCandidateCreateScheduleModel.create(schedule, (err, createdSchedule) => {
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
      callback(null, createdSchedule);
      return;
    }
  });
};

//update my position
exports.patchCreateSchedule = (id, schedule, callback) => {
  console.log("id=" + id);
  myCandidateCreateScheduleModel.findById(id, (err, result) => {
    if (err) {
      callback(null, err);
      return;
    } else {
      if (result != null) {
        result.candidateName = schedule.candidateName || result.candidateName;
        result.position = schedule.position || result.position;
        result.experience = schedule.experience || result.experience;
        result.selectiTime = schedule.selectiTime || result.selectiTime;
        result.selectInterviwer =
          schedule.selectInterviwer || result.selectInterviwer;

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

// delete  schedule
exports.deleteCreateSchedule = (id, callback) => {
  myCandidateCreateScheduleModel.findByIdAndRemove(id, (err, result) => {
    if (err) {
      callback(null, err);
      return;
    } else {
      if (result == null) {
        let response = {
          msg: "No  id found for delete ",
        };
        callback(null, response);
        return;
      } else {
        let response = {
          msg: "succesfully delete your  data",
          id: result._id,
        };
        callback(null, response);
        return;
      }
    }
  });
};
