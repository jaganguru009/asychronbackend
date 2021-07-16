var appRoot = require("app-root-path");
var myCandidateModel = require(appRoot +
  "/_api/adminAPI/hiring/myCandidates/myCandidateModel");

// get myCandidte
exports.getMyCandidate = (queryString, callback) => {
  myCandidateModel.find((err, result) => {
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
exports.getMyCandidateById = (id, callback) => {
  myCandidateModel.findById(id, (err, result) => {
    if (err) {
      callback(null, err);
      return;
    } else {
      if (result == null) {
        let response = {
          msg: "NoCanmyCandidate data id",
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
exports.postMyCandidate = (myCandidate, callback) => {
  myCandidateModel.create(myCandidate, (err, createdMyCandidate) => {
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
      callback(null, createdMyCandidate);
      return;
    }
  });
};

//update my position
exports.patchMyCandidate = (id, myCandidate, callback) => {
  console.log("id=" + id);
  myCandidateModel.findById(id, (err, result) => {
    if (err) {
      callback(null, err);
      return;
    } else {
      if (result != null) {
        result.name = myCandidate.name || result.name;
        result.location = myCandidate.location || result.location;
        result.positionTitle =
          myCandidate.positionTitle || result.positionTitle;
        result.experience = myCandidate.experience || result.experience;
        result.np = myCandidate.np || result.np;

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

//  delete myCandidate
exports.deleteMyCandidate = (id, callback) => {
  myCandidateModel.findByIdAndRemove(id, (err, result) => {
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
