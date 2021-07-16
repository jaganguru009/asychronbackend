var mongoose = require("mongoose");

var myCandidateSchema = mongoose.Schema({
  name: String,
  location: String,
  positionTitle: String,
  experience: String,
  np: String,
});
var MyCandidate = (module.exports = mongoose.model(
  "myCandidate",
  myCandidateSchema
));
