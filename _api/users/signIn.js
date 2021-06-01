var express = require('express');
var router = express.Router();
var async = require('async');
var appRoot = require('app-root-path'); 
var userService = require(appRoot + '/services/userService');
var securedAPI = require(appRoot + '/middleware/securedAPI');  

// create new object
router.post('/', function (req, res, next) { 
      userService.signIn(req.body, function (err, results) {
        if (err) {
          res.json(err);
        }
        else { 
          res.json(results); 
        }

      })

     
});

module.exports = router;