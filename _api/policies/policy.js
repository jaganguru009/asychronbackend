var express = require("express");
var router = express.Router();
var appRoot = require("app-root-path");
var policyService = require(appRoot + '/services/policyService');


//get all policies
router.get('/', (req, res, next) => {
    policyService.getPolicy("policy", (err, result) => {
       
      if(err){
        res.status(500).send(err);
      }else{
          res.send({"policy":result});
      }
    })
})

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

//create policy 
router.post('/',(req,res,next)=>{
    policyService.postPolicy(req.body,(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
})

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