var express = require('express');
var router = express.Router();

// root resource only returns info
router.get('/', function (req, res, next) {
  res.json('{ "name": "FIVE_BACKEND API", "version": "0.01 Alpha" }');
});

router.use('/users', require('./users/users')); 
router.use('/signIn', require('./users/signIn'));
router.use('/assets',require('./assets/assets'));
router.use('/leaves',require('./Leaves/leaves'));
router.use('/forms',require('./forms/forms'));
router.use('/policies',require('./policies/policy'));
router.use('/performances', require('./performance/performance'));
router.use('/tasks' ,require('./Tasks/task'));
router.use('/profiles',require('./myHomes/Profile/profile'));
router.use('/banks',require('./myHomes/Bank/bank'));
router.use('/bankDetails',require('./myHomes/Bank/bank'));
router.use('/families',require('./myHomes/Family/family'));
router.use('/educations',require('./myHomes/Education/education'));
router.use('/referances',require('./myHomes/Referance/referance'));
router.use('/certificates',require('./myHomes/Certificate/certificate'));







module.exports = router; 