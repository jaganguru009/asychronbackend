var mongoose = require("mongoose");

var vacancyNewRequest = mongoose.Schema({
  title: String,
  opSkillSet: String,
  employmentType: String,
  project: String,
  designation: String,
  description: String,
  experience: String,
  mSkillSet: String,
  budget: String,
  education: String,
  approvers: String,
  dueDate: Date,
  department: String,
  status: String,
});

var VacancyNewRequest = (module.exports = mongoose.model(
  "NewRequestVacancy",
  vacancyNewRequest
));
