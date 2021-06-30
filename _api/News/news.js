var express = require('express');
var router = express.Router();
var appRoot = require('app-root-path');
var newsService = require(appRoot + '/services/newsService');


//get data 
router.get('/',(req,res,next)=>{
    if(req.query.userName !=undefined){
    newsService.newsByUserName("News",(err,result)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.send({"News":result})
        }
    })
}else{
    newsService.getNews("News",(err,result)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.send({"News":result})
        }
    })
}
})

// get by id
router.get('/:id',(req,res,next)=>{
    newsService.getnewsById(req.params.id,(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
})

//post data 
router.post('/',(req,res,next)=>{
    newsService.newsByUserName(req.body.userName,(err,result)=>{
        if(err){
            res.json(err);
        }else{
            newsService.newsPost(req.body,(err,result)=>{
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
    newsService.updateNews(req.params.id,req.body,(err,result)=>{
     if(err){
        res.json(err);
    }else{
        res.json(result);
    }
})
})

// delete data 
router.delete('/:id',(req,res,next )=>{
    newsService.newsDelete(req.params.id,(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
})

module.exports = router;