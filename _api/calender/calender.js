var express = require('express');
var router = express.Router();
var appRoot = require('app-root-path');
var calenderService = require(appRoot + '/services/calenderService');


//get data 
router.get('/',(req,res,next)=>{
    if(req.query.userName !=undefined){
    calenderService.calenderByUserName("CalenderEvent",(err,result)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.send({"CalenderEvent":result})
        }
    })
}else{
    calenderService.getCalender("calenderEvent",(err,result)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.send({"calenderEvent":result})
        }
    })
}
})

// get by id
router.get('/:id',(req,res,next)=>{
    calenderService.getCalenderById(req.params.id,(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
})

//post data 
router.post('/',(req,res,next)=>{
    calenderService.calenderByUserName(req.body.userName,(err,result)=>{
        if(err){
            res.json(err);
        }else{
            calenderService.calenderPost(req.body,(err,result)=>{
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
    calenderService.updateCalender(req.params.id,req.body,(err,result)=>{
     if(err){
        res.json(err);
    }else{
        res.json(result);
    }
})
})

// delete data 
router.delete('/:id',(req,res,next )=>{
    calenderService.calenderDelete(req.params.id,(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
})

module.exports = router;