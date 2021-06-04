var express = require("express");
var appRoot =require('app-root-path');
var educationService = require(appRoot + '/services/educationService');
var router =express.Router();


//get all educaion detail
router.get("/", (req, res, next) => {
    if (req.query.userName != undefined) {
      educationService.getEduDetailByUserName(
        req.query.userName,
        (err, result) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.send({ 'EducationDetail': result });
          }
        }
      );
    } else {
      educationService.getEduDetail("EducationDetail", (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send(result);
        }
      });
    }
  });
  



//get education detail by id 
router.get('/:id',(req,res,next)=>{
    educationService.getEduDetailById(req.params.id,(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result)
        }
    })
})

//post education data
router.post("/", (req, res, next) => {
    educationService.getEduDetailByUserName(req.body.userName, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (result.length > 0) {
          console.log(JSON.stringify(result));
          educationService.patchEduDetail(
            result[0]._id,
            req.body,
            (err, result) => {
              if (err) {
                res.json(err);
              } else {
                res.json(result);
              }
            }
          );
        } else {
          educationService.postEduDetail(req.body, (err, result) => {
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
  


//update education detail
router.patch('/:id',(req,res,next)=>{
    educationService.patchEduDetail(req.params.id,req.body,(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
})

//delete education data 
router.delete('/:id',(req,res,next)=>{
    educationService.deleteEdu(req.params.id,(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
})


module.exports = router;