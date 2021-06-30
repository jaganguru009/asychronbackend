var express = require('express');
var router = express.Router();
var appRoot = require('app-root-path');
var holidayService = require(appRoot + '/services/holidayService');


//get data 
router.get('/',(req,res,next)=>{
    if(req.query.userName !=undefined){
    holidayService.holidayByUserName("Holiday",(err,result)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.send({"Holiday":result})
        }
    })
}else{
    holidayService
.getHoliday("Holiday",(err,result)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.send({"Holiday":result})
        }
    })
}
})

// get by id
router.get('/:id',(req,res,next)=>{
    holidayService
.getHolidayById(req.params.id,(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
})

//post data 
router.post('/',(req,res,next)=>{
    holidayService.holidayByUserName(req.body.userName,(err,result)=>{
        if(err){
            res.json(err);
        }else{
            holidayService.holidayPost(req.body,(err,result)=>{
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
    holidayService.updateHoliday(req.params.id,req.body,(err,result)=>{
     if(err){
        res.json(err);
    }else{
        res.json(result);
    }
})
})

// delete data 
router.delete('/:id',(req,res,next )=>{
    holidayService.holidayDelete(req.params.id,(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
})

module.exports = router;