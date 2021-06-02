//const { mongooose } = require("mongoose")
var mongoose = require("mongoose");

var performanceSchema = mongoose.Schema({
  indicators: {
    escalations: String,
    dues: String,
    compliance: String,
    codingStandards: String,
  },
  managerReview: String,
  hrReview: String,
  teamReview: String,
  overallPerformance: String,

  goals: {
    technicalGoals: String,
    managerialGoals: String,
    hrReview: String,
    teamGoals: String,
    feedbackGoals: Number,
  },
});
var Performance = (module.exports = mongoose.model(
  "performances",
  performanceSchema
));
 