var express = require("express");
var router = express.Router();
var appRoot = require("app-root-path");
var formService = require(appRoot + "/services/formService");

//get all forms
router.get("/", (req, res, next) => {
  if (req.query.userName != undefined) {
    formService.getFormByUserName(req.query.userName, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send({ 'Forms': result });
      }
    });
  } else {
    formService.getForms("forms", (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send({ forms: result });
      }
    });
  }
});

//get form by Id
router.get("/:id", (req, res, next) => {
  formService.getFormsById(req.params.id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});


//post bank details
router.post("/", (req, res, next) => {
    formService.getFormByUserName(req.body.userName, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (result.length > 0) {
          console.log(JSON.stringify(result));
          formService.patchForm(result[0]._id, req.body, (err, result) => {
            if (err) {
              res.json(err);
            } else {
              res.json(result);
            }
          });
        } else {
          formService.postForm(req.body, (err, result) => {
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
  



//update forms
router.patch("/:id", (req, res, next) => {
  formService.patchForm(req.params.id, req.body, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

//delete form
router.delete("/:id", (req, res, next) => {
  formService.deleteForm(req.params.id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
