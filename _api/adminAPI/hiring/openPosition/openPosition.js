var express = require("express");
var router = express.Router();
var appRoot = require("app-root-path");
var vacancyNewReqService = require(appRoot +
  "/services/adminServices/vacancyNewReqService");

// get all open positions
router.get("/", (req, res, next) => {
  vacancyNewReqService.getNewRequest("VacancyNewRequests", (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({ VacancyNewRequests: result });
    }
  });
});

/*
//get by id
router.get("/:id", (req, res, next) => {
  openPositionService.getOpenPositionById(req.params.id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

//post openPosition
router.post("/", (req, res, next) => {
  openPositionService.postOpenPosition(req.body, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

//patch openPosition
router.patch("/:id", (req, res, next) => {
  openPositionService.patchOpenPosition(
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

//delete by id
router.delete("/:id", (req, res, next) => {
  openPositionService.deleteOpenPosition(req.params.id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

*/

module.exports = router;
