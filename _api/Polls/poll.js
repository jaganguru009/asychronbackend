var express = require('express');
var router = express.Router();
var appRoot = require('app-root-path');
const {request} = require('express');
var pollService = require(appRoot + '/services/pollService');

//get poll template

router.get('/', (req, res, next) => {
  var template = req.query.type;
  if (template != undefined) {
    pollService.getPollByTemplate('template', (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send({template: result});
      }
    });
  } else {
    pollService.getPoll('Polls ', (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send({Polls: result});
      }
    });
  }
});

//get poll
router.get('/', (req, res, next) => {
  if (req.query.userName != undefined) {
    pollService.getPollByUserName(req.query.userName, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send({Polls: result});
      }
    });
  } else {
    pollService.getPoll('Polls ', (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send({Polls: result});
      }
    });
  }
});

//get by id
router.get('/:id', function (req, res, next) {
  pollService.getPollById(req.params.id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

// post poll
router.post('/', (req, res, next) => {
  pollService.getPollByUserName(req.body.userName, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      pollService.postPoll(req.body, (err, result) => {
        if (err) {
          res.json(err);
        } else {
          res.json(result);
        }
      });
    }
  });
});

//update poll
router.patch('/:id', (req, res, next) => {
  pollService.patchPoll(req.params.id, req.body, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
      console.log('success');
    }
  });
});

//delete poll
router.delete('/:id', (req, res, next) => {
  pollService.deletePoll(req.params.id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
