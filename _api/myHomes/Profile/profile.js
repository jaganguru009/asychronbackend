var express = require("express");
var appRoot = require("app-root-path");
var profileService = require(appRoot + "/services/profileService");
var router = express.Router();
var securedAPI = require(appRoot + "/middleware/securedAPI");
var async = require("async");

//get all profiles
router.get("/", (req, res, next) => {
  if (req.query.userName != undefined) {
    profileService.getProfileByUserName(req.query.userName, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send({ pprofiles: result });
      }
    });
  } else {
    profileService.getProfile("profiles", (err, result) => {
      if (err) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
          "Access-Control-Allow-Headers",
          "Origin,X-Requested-With,Content-Type,Accept"
        );

        res.status(500).send(err);
      } else {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
          "Access-Control-Allow-Origin",
          "Origin,X-Requested-With,Content-Type,Accept"
        );

        res.send({ profiles: result });
      }
    });
  }
});

//get profiles by id
router.get("/:id", (req, res, next) => {
  profileService.getProfileById(req.params.id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

//post bank details
router.post("/", (req, res, next) => {
  profileService.getProfileByUserName(req.body.userName, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (result.length > 0) {
        console.log(JSON.stringify(result));
        profileService.patchProfile(result[0]._id, req.body, (err, result) => {
          if (err) {
            res.json(err);
          } else {
            res.json(result);
          }
        });
      } else {
        profileService.postProfile(req.body, (err, result) => {
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

//update (patch ) profile
router.patch("/:id", (req, res, next) => {
  profileService.patchProfile(req.params.id, req.body, (err, results) => {
    if (err) {
      res.json(err);
    } else {
      res.json(results);
    }
  });
});

//delete profile
router.delete("/:id", (req, res, next) => {
  profileService.deleteProfile(
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
