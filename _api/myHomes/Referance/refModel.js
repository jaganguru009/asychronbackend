var mongoose = require("mongoose");

var refSchema = mongoose.Schema({
  userName: String,
  name: String,
  title: String,
  email: String,
  mobile: Number,
  company: String,

  
});
var Refernces = (module.exports = mongoose.model("refernces", refSchema));
