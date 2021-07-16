var express = require("express");
var router = express.Router();
var appRoot = require("app-root-path");
var myPositionService = require(appRoot +
  "/services/adminServices/myPositionService");

router.get("/", (req, res, next) => {
  myPositionService.getMyPosition("MyPositions", (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({ MyPosition: result });
    }
  });
});

//get by id
router.get("/:id", (req, res, next) => {
  myPositionService.getMyPositionById(req.params.id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

// post my position
router.post("/", (req, res, next) => {
  myPositionService.postMyPositionModel(req.body, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

//patch my postion
router.patch("/:id", (req, res, next) => {
  myPositionService.patchMyPosition(req.params.id, req.body, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

//delete
router.delete("/:id", (req, res, next) => {
  myPositionService.deleteMyPosition(req.params.id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
