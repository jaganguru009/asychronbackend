var mongoose = require("mongoose");

var candidateCreateScheduleSchema = mongoose.Schema({
  candidateName: String,
  position: String,
  experience: String,
  selectiTime: String,
  selectInterviwer: String,
});

var candidateCreateSchedule = (module.exports = mongoose.model(
  "CandidateCreateSchedule",
  candidateCreateScheduleSchema
));
