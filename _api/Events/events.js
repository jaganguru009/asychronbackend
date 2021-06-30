var express = require('express');
var router = express.Router();
var appRoot = require('app-root-path');
var eventService = require(appRoot + '/services/eventService');


//get data 
router.get('/',(req,res,next)=>{
    if(req.query.userName !=undefined){
    eventService.eventByUserName("Events",(err,result)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.send({"Events":result})
        }
    })
}else{
    eventService
.getEvent("Events",(err,result)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.send({"Events":result})
        }
    })
}
})

// get by id
router.get('/:id',(req,res,next)=>{
    eventService
.getEventById(req.params.id,(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
})

//post data 
router.post('/',(req,res,next)=>{
    eventService
.eventByUserName(req.body.userName,(err,result)=>{
        if(err){
            res.json(err);
        }else{
            eventService
        .eventPost(req.body,(err,result)=>{
                if(err){
                    res.json(err);
                }else{
                    res.json(result);
                }
            })
            
        }
    })
})

//update data 
router.patch('/:id',(req,res,next)=>{
    eventService
.updateEvent(req.params.id,req.body,(err,result)=>{
     if(err){
        res.json(err);
    }else{
        res.json(result);
    }
})
})

// delete data 
router.delete('/:id',(req,res,next )=>{
    eventService
.eventDelete(req.params.id,(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
})

module.exports = router;