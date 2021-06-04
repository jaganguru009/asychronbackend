var express = require("express");
var router = express.Router();
var appRoot = require("app-root-path");
var policyService = require(appRoot + '/services/policyService');


//get all policies
router.get('/', (req, res, next) => {
    if (req.query.userName != undefined) {
        policyService.getPolicyByUserName(req.query.userName, (err, result) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.send({ 'Policy': result });
          }
        });
      }else{
    policyService.getPolicy("policy", (err, result) => {
       
      if(err){
        res.status(500).send(err);
      }else{
          res.send({"policy":result});
      }
    })
}
});

//get policy from Id
router.get('/:id',(req,res,next)=>{
    policyService.getPolicyById(req.params.id,(err,result) =>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
})

//post policy details
router.post("/", (req, res, next) => {
    policyService.getPolicyByUserName(req.body.userName, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (result.length > 0) {
          console.log(JSON.stringify(result));
          policyService.patchPolicy(result[0]._id, req.body, (err, result) => {
            if (err) {
              res.json(err);
            } else {
              res.json(result);
            }
          });
        } else {
          policyService.postPolicy(req.body, (err, result) => {
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
  




//update policy 
router.patch('/:id',(req,res,next)=>{
      policyService.patchPolicy(req.params.id,req.body,(err,result)=>{
        if(err){
             res.json(err)
        }else{
            res.json(result)
        }
      })  
})

//delete polocy

router.delete('/:id',(req,res,next)=>{
    policyService.deletePolicy(req.params.id,(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result)
        }
    })
});

module.exports= router;