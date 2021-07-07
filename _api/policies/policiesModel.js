var mongoose = require('mongoose');

var policiesSchema = mongoose.Schema({
  userName: String,
  name: String,
  documentName: String,
  uploadOn: Date,
});

var Policy = (module.exports = mongoose.model('policies', policiesSchema));
