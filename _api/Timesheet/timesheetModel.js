var mongoose = require('mongoose');

var timeSheetSchema = mongoose.Schema({
  //new fields
  submittedOn: Date,
  userName: String,
  selectWeek: Date,
  notes: String,
  mon: {
    hours: Number,
    comment: String,
  },
  tue: {
    hours: Number,
    comment: String,
  },
  wed: {
    hours: Number,
    comment: String,
  },
  thu: {
    hours: Number,
    comment: String,
  },
  fri: {
    hours: Number,
    comment: String,
  },
  sat: {
    hours: Number,
    comment: String,
  },
  sun: {
    hours: Number,
    comment: String,
  },
  totalHours: Number,
  creationDate: Date,
  project: String,
  department: String,
  module: String,
  startDate: Date,
  endDate: Date,
  status: String,
});

var Timesheet = (module.exports = mongoose.model(
  'timeSheets',
  timeSheetSchema
));
