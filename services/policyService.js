var appRoot = require("app-root-path");
var policiesModel = require(appRoot + "/_api/policies/policiesModel");

//get all policies list from db

exports.getPolicy = (querystring, callback) => {
  policiesModel.find((err, result) => {
    if (err) {
      callback(null, err);
      return;
    } else {
      callback(null, result);
      return;
    }
  });
};

//get policy by id
exports.getPolicyById = (id, callback) => {
  policiesModel.findById(id, (err, policy) => {
    if (err) {
      callback(null, err);
      return;
    } else {
      if (policy == null) {
        var response = {
          msg: "Sorry...No policy found ",
        };
        callback(null, response);
        return;
      } else {
        callback(null, policy);
        return;
      }
    }
  });
};
//ppolicy by userName
exports.getPolicyByUserName = (userName, callback) => {
  policiesModel
    .find()
    .where("userName")
    .equals(userName)
    .exec((err, policies) => {
      if (err) {
        callback(null, err);
        return;
      } else {
        //console.log("order by agent & status " + JSON.stringify(orders));
        callback(null, policies);
        return;
      }
    });
};

//create policy in application
exports.postPolicy = (policy, callback) => {
  policiesModel.create(policy, (err, createdPolicy) => {
    if (err) {
      //if inserting document with duplicate field
      if (err.code === 11000) {
        err = {
          error: "already exit policy ..please check onece",
        };
        callback(null, err);
        return;
      }
      callback(null, err);
      return;
    } else {
      callback(null, createdPolicy);
      console.log("successfully create your policy");
      return;
    }
  });
};

//Update policy
exports.patchPolicy = (id, policy, callback) => {
  console.log("id=" + id);

  policiesModel.findById(id, (err, result) => {
    if (err) {
      callback(null, err);
      return;
    } else {
      if (result != null) {
        result.name = policy.name || result.name;
        result.hrPolicies = policy.hrPolicies || result.hrPolicies;

        result.save((err, result) => {
          if (err) {
            callback(err);
            return;
          } else {
            callback(null, result);
            console.log("succesfully updated your policy data....  ");
            return;
          }
        });
      } else {
        let msg = { err: "no Policy found..." };
        callback(null, msg);
        return;
      }
    }
  });
};

//Delete policy
exports.deletePolicy = (id, callback) => {
  policiesModel.findByIdAndRemove(id, (err, result) => {
    if (err) {
      callback(null, err);
      return;
    } else {
      if (result == null) {
        let response = { msg: "no policy found for delete... " };
        callback(null, response);
        return;
      } else {
        let response = {
          msg: "succesfully deleted your policy...",
          id: result._id,
          // name:result._name
        };

        callback(null, response);
        return;
      }
    }
  });
};
