var appRoot = require("app-root-path");
var refModel = require(appRoot + "/_api/myHomes/Referance/refModel");

//get all refernaces
exports.getRef = (queryString, callback) => {
  refModel.find((err, result) => {
    if (err) {
      callback(null, err);
      return;
    } else {
      callback(null, result);
      return;
    }
  });
};

//get all ref by id
exports.getRefById = (id, callback) => {
  refModel.findById(id, (err, result) => {
    if (err) {
      callback(null, err);
      return;
    } else {
      if (result == null) {
        let response = {
          msg: "No data Found for that ID",
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
//get refernace by username
exports.getRefByUserName = (userName, callback) => {
  refModel
    .find()
    .where("userName")
    .equals(userName)
    .exec((err, Referance) => {
      if (err) {
        callback(null, err);
        return;
      } else {
        //console.log("order by agent & status " + JSON.stringify(orders));
        callback(null, Referance);
        return;
      }
    });
};

//post ref
exports.postRef = (refernce, callback) => {
  refModel.create(refernce, (err, createdRef) => {
    if (err) {
      if (err.code === 11000) {
        err = {
          errorType: "duplicate entry .....already exit data",
        };
      }
      callback(null, err);
      return;
    } else {
      callback(null, createdRef);
      return;
    }
  });
};

//update refernce
exports.patchRef = (id, ref, callback) => {
  console.log("id=" + id);
  refModel.findById(id, (err, result) => {
    if (err) {
      callback(null, err);
      return;
    } else {
      if (result != null) {
        result.refId = ref.refId || result.refId;
        result.name = ref.name || result.name;
        result.title = ref.title || result.title;
        result.email = ref.email || result.email;
        result.mobile = ref.mobile || result.mobile;
        result.company = ref.company || result.company;

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
          msg: "No Ref detail for Update ",
        };
        callback(null, response);
        return;
      }
    }
  });
};

// delete ref details
exports.deleteRef = (id, lastUpdatedBy, callback) => {
  refModel.findByIdAndRemove(id, (err, result) => {
    if (err) {
      callback(null, err);
      return;
    } else {
      if (result == null) {
        let response = {
          msg: "No data for delete",
        };
        callback(null, response);
        return;
      } else {
        let response = {
          msg: "Succesfully Referance data deleted",
          id: result._id,
        };
        callback(null, response);
        return;
      }
    }
  });
};
