var express = require('express');
var router = express.Router();
var appRoot = require('app-root-path'); 
var assetService = require(appRoot + '/services/assetService');


//get all assets list 
router.get('/',(req,res,next)=>{
    assetService.getAssets("assets",  (err, results)=>{
        if(err){
             res.status(500).send(err);
        }
        else{
            res.send({ 'asset': results });
        }
        
    })

});

//get asset by using id 
router.get('/:id', function (req, res, next) {  
    assetService.getAssetById(req.params.id, function (err, results) {
      if (err) {
        res.json(err);
      }
      else {
        res.json(results);
      }

    }) 
});








// create new asset 
router.post('/', function (req, res, next) { 
    assetService.postAsset(req.body, function (err, results) {
      if (err) {
        res.json(err);
      }
      else { 
        res.json(results); 
      }

    })
})

// delete data from database also
router.delete('/:id', function (req, res, next) { 
    assetService.deleteAsset(req.params.id, req.query.issueDate, function (err, results) {
      if (err) {
        res.json(err);
      }
      else {
        res.json(results);
      }

    });
  
});

//  update data in database 
router.patch('/:id', function (req, res, next) { 
    assetService.patchAsset(req.params.id, req.body, function (err, results) {
      if (err) {
        res.json(err);
      }
      else {
        res.json(results);
      }

    })

});

module.exports = router;
