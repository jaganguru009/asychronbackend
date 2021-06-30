var mongooose = require('mongoose');


var newsSchema = mongooose.Schema({

        userName:String,
        newsTitle:String,
        newsDesc:String,
        newsDate:Date,
        calenderColor:String

        

});

var News = (module.exports = mongooose.model ("News",newsSchema));