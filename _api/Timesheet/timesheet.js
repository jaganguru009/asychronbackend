var express = require('express')
var appRoot = require('app-root-path')
const e = require('express')
const { rejectSeries } = require('async')
var router = express.Router()
var timesheetService = require(appRoot + '/services/timesheetService')

//get timesheet
router.get('/', (req, res, next) => {
    if(req.query.userName != undefined){
  timesheetService.getTimesheetByUserName(req.query.userName, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
        res.send({Timesheet:result});
    }
  })
}else{
    timesheetService.getTimesheet('Timesheet',(err,result)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.send({Timesheet:result})
        }
    })

}
})


//get by id
router.get('/:id',(req,res,next)=>{
timesheetService.getTimesheetById(req.params.id,(err,result)=>{
    if(err){
        res.json(err);
    }else{
        res.json(result);
    }
})
})


//post timesheet
router.post('/',(req,res,next)=>{
    timesheetService.getTimesheetByUserName(req.body.userName,(err,result)=>{
        if(err){
            res.status(500).send(err);
        }else{
            timesheetService.postTimesheet(req.body ,(err,result)=>{
                if(err){
                    res.json(err);
                }else{
                    res.json(result);
                }
            })
        
        }
    })

})

//update timesheet 
router.patch('/:id',(req,res,next)=>{
    timesheetService.patchTimesheet(req.params.id,req.body,(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }

    })
})


//delete timesheet 
router.delete("/:id",(req,res,next)=>{
    timesheetService.deleteTimesheet(req.params.id,(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
})


module.exports = router;



