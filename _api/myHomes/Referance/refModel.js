var mongoose = require("mongoose");

var refSchema = mongoose.Schema({
  userName: String,
  refId: {
    type: String 
  },
  name: String,
  title: String,
  email: String,
  mobile: Number,
  company: String,
});
var Refernces = (module.exports = mongoose.model("refernces", refSchema));
