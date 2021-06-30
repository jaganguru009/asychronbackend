var mongooose = require('mongoose');


var eventSchema = mongooose.Schema({

        userName:String,
        eventTitle:String,
        eventDesc:String,
        eventDate:Date,
        calenderColor:String

        

});

var Events = (module.exports = mongooose.model ("Events",eventSchema));