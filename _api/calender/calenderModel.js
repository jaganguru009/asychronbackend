var mongooose = require('mongoose');


var calenderSchema = mongooose.Schema({

    userName:String,
    
    
        eventTitle:String,
        eventDesc:String,
        eventDate:Date,

        holidayDesc:String,
        holidayDate:Date,
        
        newsTitle:String,
        news:String
    

});

var Calender = (module.exports = mongooose.model ("Calender",calenderSchema));