var express = require("express");
var router = express.Router();
var appRoot = require("app-root-path");
var vacancyNewReqService = require(appRoot +
  "/services/adminServices/vacancyNewReqService");

// get new request
router.get("/", (req, res, next) => {
  vacancyNewReqService.getNewRequest("vacancyNewRequest", (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({ vacancyNewRequest: result });
    }
  });
});

//get newRequest by using id
router.get("/:id", function (req, res, next) {
  vacancyNewReqService.getbNewRequestById(
    req.params.id,
    function (err, results) {
      if (err) {
        res.json(err);
      } else {
        res.json(results);
      }
    }
  );
});
//post Neq req
router.post("/", (req, res, next) => {
  vacancyNewReqService.postNewRequest(req.body, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

// delete data from database also
router.delete("/:id", function (req, res, next) {
  vacancyNewReqService.deleteNewRequest(req.params.id, function (err, results) {
    if (err) {
      res.json(err);
    } else {
      res.json(results);
    }
  });
});

//  update data in database
router.patch("/:id", function (req, res, next) {
  vacancyNewReqService.patchNewRequest(
    req.params.id,
    req.body,
    function (err, results) {
      if (err) {
        res.json(err);
      } else {
        res.json(results);
      }
    }
  );
});

module.exports = router;
