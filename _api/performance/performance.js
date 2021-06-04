var express = require("express");
var router = express.Router();
var appRoot = require("app-root-path");
var performanceService = require(appRoot + "/services/performanceService");

//get all performances
router.get("/", (req, res, next) => {
  if (req.query.userName != undefined) {
    performanceService.getPerformanceByUserName(
      req.query.userName,
      (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send({ Performances: result });
        }
      }
    );
  } else {
    performanceService.getPerformance("performances", (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send({ performances: result });
      }
    });
  }
});

//get performances by id
router.get("/:id", (req, res, next) => {
  performanceService.getPerformanceById(req.params.id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

//get performances by userName
router.post("/", (req, res, next) => {
  performanceService.getPerformanceByUserName(
    req.body.userName,
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (result.length > 0) {
          console.log(JSON.stringify(result));
          performanceService.patchPerformance(
            result[0]._id,
            req.body,
            (err, result) => {
              if (err) {
                res.json(err);
              } else {
                res.json(result);
              }
            }
          );
        } else {
          performanceService.postPerformance(req.body, (err, result) => {
            if (err) {
              res.json(err);
            } else {
              res.json(result);
            }
          });
        }
      }
    }
  );
});

//update performances
router.patch("/:id", (req, res, next) => {
  performanceService.patchPerformance(
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

//delete performances
router.delete("/:id", (req, res, next) => {
  performanceService.deletePerformance(req.params.id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
