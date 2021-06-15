var mongoose = require('mongoose');
 
var timeSheetSchema = mongoose.Schema({

    selectWeek : Date,
    


});

var Timesheet = module.exports = mongoose.model('timeSheets',timeSheetSchema)
