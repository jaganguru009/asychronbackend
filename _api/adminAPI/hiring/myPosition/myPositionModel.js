var mongoose = require("mongoose");

var myPositionSchema = mongoose.Schema({
  candidateName: String,
  contactNumber: Number,
  email: String,
  availabilty: String,
  hrFeedBack: String,
  hrRating: Number,
});

var myPosition = (module.exports = mongoose.model(
  "Myposition",
  myPositionSchema
));
