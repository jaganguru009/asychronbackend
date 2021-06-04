var express = require("express");
var appRoot = require("app-root-path");
var refService = require(appRoot + "/services/refService");
var router = express.Router();

//get all ref
router.get("/", (req, res, next) => {
  if (req.query.userName != undefined) {
    refService.getRefByUserName(req.query.userName, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send({ Referance: result });
      }
    });
  } else {
    refService.getRef("Referances", (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  }
});

//get ref by id
router.get("/:id", (req, res, next) => {
  refService.getRefById(req.params.id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

//post Ref details
router.post("/", (req, res, next) => {
  refService.getRefByUserName(req.body.userName, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (result.length > 0) {
        console.log(JSON.stringify(result));
        refService.patchRef(result[0]._id, req.body, (err, result) => {
          if (err) {
            res.json(err);
          } else {
            res.json(result);
          }
        });
      } else {
        refService.postRef(req.body, (err, result) => {
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

//update ref
router.patch("/:id", (req, res, next) => {
  refService.patchRef(req.params.id, req.body, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

//delete ref
router.delete("/:id", (req, res, next) => {
  refService.deleteRef(
    req.params.id,
    req.query.lastUpdatedBy,
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
