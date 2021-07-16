var express = require("express");
var router = express.Router();
var appRoot = require("app-root-path");
var myCandidateCreateScheduleService = require(appRoot +
  "/services/adminServices/myCandidateCreateScheduleService");

router.get("/", (req, res, next) => {
  myCandidateCreateScheduleService.getCreateSchedule(
    "candidateSchedule",
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send({ MyCandidateCreateSchedule: result });
      }
    }
  );
});

//get by id
router.get("/:id", (req, res, next) => {
  myCandidateCreateScheduleService.getCreateScheduleById(
    req.params.id,
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    }
  );
});

// post my position
router.post("/", (req, res, next) => {
  myCandidateCreateScheduleService.postCreateSchedule(
    req.body,
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    }
  );
});

//patch my postion
router.patch("/:id", (req, res, next) => {
  myCandidateCreateScheduleService.patchCreateSchedule(
    req.params.id,
    req.body,
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    }
  );
});

//delete
router.delete("/:id", (req, res, next) => {
  myCandidateCreateScheduleService.deleteCreateSchedule(
    req.params.id,
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    }
  );
});

module.exports = router;
