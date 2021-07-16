var appRoot = require('app-root-path');
const {response, request} = require('express');
const e = require('express');
var pollModel = require(appRoot + '/_api/Polls/pollModel');

// get polls
exports.getPoll = (querystring, callback) => {
  pollModel.find((err, result) => {
    if (err) {
      callback(null, err);
      return;
    } else {
      callback(null, result);
      return;
    }
  });
};

// get by pollId
exports.getPollById = (id, callback) => {
  pollModel.findById(id, (err, poll) => {
    if (err) {
      callback(null, err);
      return;
    } else {
      if (poll == null) {
        var response = {
          msg: 'no poll found',
        };
        callback(null, response);
        return;
      } else {
        callback(null, poll);
        return;
      }
    }
  });
};

// get polls template by admin
exports.getPollByTemplate = (querystring, callback) => {
  pollModel
    .find()
    .where('type')
    .equals('template')
    .exec((err, template) => {
      if (err) {
        callback(null, err);
        return;
      } else {
        callback(null, template);
        return;
      }
    });
};

// get bby userName
exports.getPollByUserName = (userName, callback) => {
  pollModel
    .find()
    .where('userName')
    .equals(userName)
    .exec((err, polls) => {
      if (err) {
        callback(null, err);
        return;
      } else {
        // console.log("orders by polls status" + JSON.stringify(orders));
        callback(null, polls);
        return;
      }
    });
};

// post polls
exports.postPoll = (poll, callback) => {
  pollModel.create(poll, (err, createdPoll) => {
    if (err) {
      if (err.code === 11000) {
        err = {
          errorType: 'duplicate poll entry',
        };
        callback(null, err);
        return;
      }
      callback(null, err);
      return;
    } else {
      callback(null, createdPoll);
      return;
    }
  });
};

//patch details
exports.patchPoll = (id, poll, callback) => {
  console.log('id=' + id);
  pollModel.findById(id, (err, result) => {
    if (err) {
      callback(null, err);
      return;
    } else {
      if (result != null) {
        result.pollTitle = poll.pollTitle || result.pollTitle;
        result.respondedBy = poll.respondedBy || result.respondedBy;
        result.initiatedBy = poll.initiatedBy || result.initiatedBy;
        result.priority = poll.priority || result.priority;
        result.status = poll.status || result.status;
        result.question = poll.question || result.question;
        result.createdBy = poll.createdBy || result.createdBy;
        result.voteType = poll.voteType || result.voteType;
        result.vote = poll.vote || result.vote;
        result.type = poll.type || result.type;
        result.options = poll.options || result.options;
        result.startDate = poll.startDate || result.startDate;
        result.endDate = poll.endDate || result.endDate;
        result.isSubmitted = poll.isSubmitted || result.isSubmitted;
        result.templateId = poll.templateId || result.templateId;

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
        let errormsg = {err: 'poll not found'};
        callback(null, errormsg);
        return;
      }
    }
  });
};

// delete polls
exports.deletePoll = (id, callback) => {
  pollModel.findByIdAndRemove(id, (err, result) => {
    if (err) {
      callback(null, err);
      return;
    } else {
      if (result == null) {
        let response = {msg: 'No polls found '};
        callback(null, response);
        return;
      } else {
        let response = {
          msg: 'succesfully deleted ',
          id: result._id,
        };
        callback(null, response);
        return;
      }
    }
  });
};
