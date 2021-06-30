var mongooose = require('mongoose');

var holidaySchema = mongooose.Schema({

    userName:String,
    holidayDesc:String,
    holidayDate:Date,
    calenderColor:String

    

});

var Holiday = (module.exports = mongooose.model ("Holidays",holidaySchema));