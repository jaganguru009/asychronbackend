var express = require('express');
var appRoot=require('app-root-path');
var certificateService = require(appRoot+'/services/certificateService');
var router = express.Router();

//get all certifiacte 
router.get('/',(req,res,next)=>{
    certificateService.getCertificate("Certificates",(err,result)=>{
        if(err){
            res.status(500).send(err);
        
        }
        else{
            res.send(result);

        }
    })
})

//get certifiacte by id 
router.get('/:id',(req,res,next)=>{
    certificateService.getCertificateById(req.params.id,(err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }       
    })
})

//post certificate 
router.post('/',(req,res,next)=>{
    certificateService.postCertificate(req.body,(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
})

//update certificate
router.patch('/:id',(req,res,next)=>{
    certificateService.patchCertificate(req.params.id,req.body,(err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
})

//delete certificate
router.delete('/:id',(req,res,next)=>{
    certificateService.deleteCert(req.params.id,(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
})

module.exports = router;