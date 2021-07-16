var express = require("express");
var router = express.Router();
var appRoot = require("app-root-path");
var myCandidateService = require(appRoot +
  "/services/adminServices/myCandidateService");

router.get("/", (req, res, next) => {
  myCandidateService.getMyCandidate("MyCandidates", (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({ MyCandidate: result });
    }
  });
});

//get by id
router.get("/:id", (req, res, next) => {
  myCandidateService.getMyCandidateById(req.params.id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

// post my position
router.post("/", (req, res, next) => {
  myCandidateService.postMyCandidate(req.body, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

//patch my postion
router.patch("/:id", (req, res, next) => {
  myCandidateService.patchMyCandidate(
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
  myCandidateService.deleteMyCandidate(req.params.id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
