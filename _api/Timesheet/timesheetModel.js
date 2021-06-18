var mongoose = require("mongoose");

var timeSheetSchema = mongoose.Schema({
    
  userName: String,
  date: Date,
  selectWeek: String,
  notes: String,

  project: String,
  department: String,
  tasks: String,

  mon: Boolean,
  tue: Boolean,
  wed: Boolean,
  thu: Boolean,
  fri: Boolean,
  sat: Boolean,
  sun: Boolean,

  total: Number,
  startDate: Date,
  endDate: Date,
  status: Boolean,
  period: Date,
  submitOn:{
      type:Date,
      default:Date.now
  }

});

var Timesheet = (module.exports = mongoose.model(
  "timeSheets",
  timeSheetSchema
));
