var express = require('express');
var router = express.Router();

// root resource only returns info
router.get('/', function (req, res, next) {
  res.json('{ "name": "FIVE_BACKEND API", "version": "0.01 Alpha" }');
});
router.use('/users', require('./users/users')); 
router.use('/assets',require('./Models/assets/assets'));
module.exports = router; 