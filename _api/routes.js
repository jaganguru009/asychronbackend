var express = require('express');
var router = express.Router();

// root resource only returns info
router.get('/', function (req, res, next) {
  res.json('{ "name": "FIVE_BACKEND API", "version": "0.01 Alpha" }');
});
router.use('/users', require('./users/models/Leaves/leaves')); 
router.use('/users', require('./users/models/Tasks/taskDetails'));
router.use('/users', require('./users/models/assets/assets'));
router.use('/users', require('./users/models/forms/formDetails'));
router.use('/users', require('./users/models/myHomes/bankDetails'));
router.use('/users', require('./users/models/myHomes/certification'));
router.use('/users', require('./users/models/myHomes/education'));
router.use('/users', require('./users/models/myHomes/familyDetails'));
router.use('/users', require('./users/models/myHomes/refDetails'));
router.use('/users', require('./users/models/myHomes/userDetails'));
router.use('/users', require('./users/models/myHomes/userProfile'));
router.use('/users', require('./users/models/performance/performanceDetails'));
router.use('/users', require('./users/models/policies/policies'));






module.exports = router; 