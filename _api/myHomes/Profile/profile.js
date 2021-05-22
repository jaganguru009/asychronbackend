var express = require('express')
var appRoot =require('app-root-path')
var profileService = require(appRoot +'/services/profileService');
var router = express.Router();
var securedAPI = require(appRoot + '/middleware/securedAPI');  
var async = require('async');


//get all profiles 
router.get('/',(req,res,next)=>{
    profileService.getProfile("profiles",(err,result)=>{
        if(err){
            res.header("Access-Control-Allow-Origin","*");
            res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");

            res.status(500).send(err)

        }else{
            res.header("Access-Control-Allow-Origin","*");
            res.header("Access-Control-Allow-Origin","Origin,X-Requested-With,Content-Type,Accept");
            
            res.send({"profiles":result});
        }
    })
})

//get profiles by id
router.get('/:id',(req,res,next)=>{
    profileService.getProfileById(req.params.id,(err,result)=>{

        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
})

//create {post } profile
router.post('/',(req,res,next)=>{
    profileService.postProfile(req.body,(err,result)=>{
        if(err){
            res.json(err);
        }else{
        res.json(result);          
        }
    })
})

//update (patch ) profile
router.patch('/:id',(req,res,next)=>{
    profileService.patchProfile(req.body,req.params.id,(err,results)=>{
        if(err){
            res.json(err);

        }else{
            res.json(results)
        }
    })
})

//delete profile
router.delete('/:id',(req,res,next)=>{
    profileService.deleteProfile(req.params.id,req.query.lastUpdatedBy,(err,result)=>{
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }


    })
})

//get by profile userNmae
router.get('/:userName',(req,res,next)=>{
    profileService.getProfileByUserName(req.params.userName,req.body,(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
})

module.exports =router;