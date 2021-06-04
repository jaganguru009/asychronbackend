var express = require("express");
var router = express.Router();
var appRoot = require("app-root-path");
var leavesService = require(appRoot + "/services/leavesService");

//get all leaves application list

router.get("/", (req, res, next) => {
  if (req.query.userName != undefined) {
    leavesService.getLeaveByUserName(req.query.userName, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send({ 'Leaves': result });
      }
    });
  } else {
    leavesService.getLeaves("leaves", (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send({ 'leaves': result });
      }
    });
  }
});

router.get("/:id", function (req, res, next) {
  leavesService.getLeavesById(req.params.id, function (err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

//post bank details
router.post("/", (req, res, next) => {
    leavesService.getLeaveByUserName(req.body.userName, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (result.length > 0) {
          console.log(JSON.stringify(result));
          leavesService.patchLeave(result[0]._id, req.body, (err, result) => {
            if (err) {
              res.json(err);
            } else {
              res.json(result);
            }
          });
        } else {
          leavesService.postLeave(req.body, (err, result) => {
            if (err) {
              res.json(err);
            } else {
              res.json(result);
            }
          });
        }
      }
    });
  });
  








//delete data from db
router.delete("/:id", (req, res, next) => {
  //params use for containing properties mapped to named route(parameters)
  leavesService.deleteLeave(req.params.id, (err, result) => {
    if (err) {
      req.json(err);
    } else {
      res.json(result);
    }
  });
});

//update leaves data
router.patch("/:id", (req, res, next) => {
  leavesService.patchLeave(req.params.id, req.body, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
