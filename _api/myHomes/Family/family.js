var express = require("express");
var router = express.Router();
var appRoot = require("app-root-path");
var familyService = require(appRoot + "/services/familyService");

//get all family data
router.get("/", (req, res, next) => {
  if (req.query.userName != undefined) {
    familyService.getFamilyByUserName(req.query.userName, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send({ Family: result });
      }
    });
  } else {
    familyService.getFamily("family", (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send({ family: result });
      }
    });
  }
});

//get by id
router.get("/:id", (req, res, next) => {
  familyService.getFamilyById(req.params.id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

//post family details
router.post("/", (req, res, next) => {
  familyService.getFamilyByUserName(req.body.userName, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (result.length > 0) {
        console.log(JSON.stringify(result));
        familyService.patchFamily(result[0]._id, req.body, (err, result) => {
          if (err) {
            res.json(err);
          } else {
            res.json(result);
          }
        });
      } else {
        familyService.postFamily(req.body, (err, result) => {
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

//patch family data Update
router.patch("/:id", (req, res, next) => {
  familyService.patchFamily(req.params.id, req.body, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

//delete family data
router.delete("/:id", (req, res, next) => {
  familyService.deleteFamily(req.params.id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
