var appRoot = require('app-root-path');
const { response } = require('express');
var newsModel = require(appRoot +'/_api/News/newsModel')


//get calender

exports.getNews = (queryString,callback)=>{
    newsModel.find((err,news)=>{
        if(err){
            callback(null,err);
            return;
        }else{
          
            callback(null,news);
            return;
        }

    })
}

// get by id 
exports.getNewsById = (id ,callback)=>{
    newsModel.findById(id,(err,news)=>{
        if(err){
            callback(null,err);
            return;
        }else{
            if(news == null){
                let response={
                    msg:"No data found "
                }
                callback(null,response);
                return;
            }else{
                callback(null,news);
                return;
            }

        }
    })
}


//getBy userName
exports.newsByUserName =(userName,callback)=>{
    newsModel.find().where('userName').equals(userName).exec((err,result)=>{
        if(err){
            callback(null,err);
            return;
        }else{
            callback(null,result);
            return;
        }
    })
}

//post calender
exports.newsPost=(news,callback)=>{
    newsModel.create(news,(err,createdNews)=>{
        if(err){
            if(err.code === 11000){
                let response={
                    msg:"Duplicate entry"
                }
                callback(null,response);
                return;
            }else{
                callback(null,err);
                return;
            }
        }else{
            callback(null,createdNews);
            return;
        }

    })
};


// update calender
exports.updateNews = (id ,news, callback)=>{
    console.log("id="+id)
    newsModel.findById(id,(err,result)=>{
        if(err){
            callback(null,err);
            return;
        }else{
            if(result != null ){

                result.newsTitle = news.newsTitle || result.newsTitle;
                result.newsDesc  = news.newsDesc || result.newsDesc;
                result.newsDate = news.newsDate || result.newsDate;
                result.calenderColor = news.calenderColor || result.calenderColor;

                

                result.save((err,result)=>{
                    if(err){
                        callback(null,err);
                        return;
                    }else{
                        callback(null,result);
                        return;
                    } 
                })
            }else{
                let response = {
                    msg:"No data found for update"
                }
                callback(null,response)
                return;
            }
        }
    });
}


// delete 
exports.newsDelete =(id,callback)=>{
    newsModel.findByIdAndRemove(id,(err,result)=>{
        if(err){
            callback(null,result);
            return;
        }else{
            if(result == null ){
                let response={
                    msg:"No data found for delete"
                }
                callback(null,response);
                return;
            }else{
                let response={
                    msg:"Succesfully delete data ",
                    id:result._id
                }
                callback(null,response);
                return;
            }
        }
    })
}