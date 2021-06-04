var express = require("express");
var router = express.Router();
var appRoot = require("app-root-path");
var assetService = require(appRoot + "/services/assetService");

//get all assets list
router.get("/", (req, res, next) => {
  if (req.query.userName != undefined) {
    assetService.getAssetByUserName(req.query.userName, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send({ 'Assets': result });
      }
    });
  } else {
    assetService.getAssets("Assets", (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send({ asset: results });
      }
    });
  }
});

//get asset by using id
router.get("/:id", function (req, res, next) {
  assetService.getAssetById(req.params.id, function (err, results) {
    if (err) {
      res.json(err);
    } else {
      res.json(results);
    }
  });
});

//post assets by userName
router.post("/", (req, res, next) => {
  assetService.getAssetByUserName(req.body.userName, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (result.length > 0) {
        console.log(JSON.stringify(result));
        assetService.patchAsset(result[0]._id, req.body, (err, result) => {
          if (err) {
            res.json(err);
          } else {
            res.json(result);
          }
        });
      } else {
        assetService.postAsset(req.body, (err, result) => {
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


// delete data from database also
router.delete("/:id", function (req, res, next) {
  assetService.deleteAsset(
    req.params.id,
    req.query.issueDate,
    function (err, results) {
      if (err) {
        res.json(err);
      } else {
        res.json(results);
      }
    }
  );
});

//  update data in database
router.patch("/:id", function (req, res, next) {
  assetService.patchAsset(req.params.id, req.body, function (err, results) {
    if (err) {
      res.json(err);
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
