var express =require("express")
var router = express.Router();
var appRoot = require('app-root-path');
var leavesService = require(appRoot + '/services/leavesService');

//get all leaves application list 

router.get('/',(req,res,next)=>{

    leavesService.getLeaves("leaves",(err,result)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.send({'leaves':result});

        }
    })
});


router.get('/:id', function (req, res, next) {  
    leavesService.getLeavesById(req.params.id, function (err, result) {
      if (err) {
        res.json(err);
      }
      else {
        res.json(result);
      }

    }) 
});



//create new leaves application 
router.post('/',(req,res,next)=>{
    leavesService.postLeave(req.body,(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result)
        }
    })
})

//delete data from db 
router.delete('/:id',(req,res,next)=>{
    //params use for containing properties mapped to named route(parameters)
    leavesService.deleteLeave(req.params.id,(err,result)=>{
        if(err){
            req.json(err)
        }else{
            res.json(result)
        }
    })

});

//update leaves data 
router.patch('/:id',(req,res,next)=>{
    leavesService.patchLeave(req.params.id ,req.body,(err,result)=>{
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
})

module.exports = router ;