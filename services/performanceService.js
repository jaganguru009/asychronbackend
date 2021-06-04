var appRoot = require("app-root-path");
const { retry } = require("async");
const performanceModel = require("../_api/performance/performanceModel");
var PerformanceModel = require(appRoot + "/_api/performance/performanceModel");

// get performance  data from database
exports.getPerformance = (querystring, callback) => {
  performanceModel.find((err, result) => {
    if (err) {
      callback(null, err);
      return;
    } else {
      callback(null, result);
      return;
    }
  });
};

//get performance by Id from database
exports.getPerformanceById = (id, callback) => {
  performanceModel.findById(id, (err, performance) => {
    if (err) {
      callback(null, err);
      return;
    } else {
      if (performance == null) {
        var response = {
          msg: "no performances available.....",
        };
        callback(null, response);
        return;
      } else {
        callback(null, performance);
        console.log("your performance....");

        return;
      }
    }
  });
};
// performance by userName 
exports.getPerformanceByUserName = (userName, callback) => {
  performanceModel
    .find()
    .where("userName")
    .equals(userName)
    .exec((err, performances) => {
      if (err) {
        callback(null, err);
        return;
      } else {
        //console.log("order by agent & status " + JSON.stringify(orders));
        callback(null, performances);
        return;
      }
    });
};

//create perfomances
exports.postPerformance = (performance, callback) => {
  performanceModel.create(performance, (err, createdPerformance) => {
    if (err) {
      if (err.code === 11000) {
        err = {
          errType: "duplicate entry",
        };

        callback(null, err);
        return;
      } else {
        callback(null, err);
        return;
      }
    } else {
      callback(null, createdPerformance);
      return;
    }
  });
};

//update performance
exports.patchPerformance = (id, performance, callback) => {
  console.log("id=" + id);
  performanceModel.findById(id, (err, result) => {
    if (err) {
      callback(null, err);
      return;
    } else {
      if (result != null) {
        result.escalations = performance.escalations || result.escalations;
        result.dues = performance.dues || result.dues;
        result.compliance = performance.compliance || result.compliance;
        result.codingStandards =
          performance.codingStandards || result.codingStandards;

        result.managerReview =
          performance.managerReview || result.managerReview;
        result.hrReview = performance.hrReview || result.hrReview;
        result.teamReview = performance.teamReview || result.teamReview;
        result.overallPerformance =
          performance.overallPerformance || result.overallPerformance;

        result.technicalGoals =
          performance.technicalGoals || result.technicalGoals;
        result.managerialGoals =
          performance.managerialGoals || result.managerialGoals;
        result.hrReview = performance.hrReview || result.hrReview;
        result.teamGoals = performance.teamGoals || result.teamGoals;
        result.feedbackGoals =
          performance.feedbackGoals || result.feedbackGoals;

        //save updated data in database
        result.save((err, result) => {
          if (err) {
            callback(null, err);
            return;
          } else {
            callback(null, result);
            console.log(
              "succesfully updated performance data in your database"
            );
            return;
          }
        });
      } else {
        let msg = { err: "no performance  found here" };
        callback(null, msg);
        return;
        // console.log("no performance found here ")
      }
    }
  });
};

//delete performance from databse

exports.deletePerformance = (id, callback) => {
  PerformanceModel.findByIdAndRemove(id, (err, result) => {
    if (err) {
      callback(null, err);
      return;
    } else {
      if (result == null) {
        let response = {
          msg: "no performance data for delete..",
        };
        callback(null, response);
        return;
      } else {
        let response = {
          msg: "Succesfully  deleted performance data from database ",
          id: result._id,
        };
        callback(null, response);
        return;
      }
    }
  });
};
