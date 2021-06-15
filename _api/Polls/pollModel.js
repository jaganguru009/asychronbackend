var mongoose = require("mongoose");

var pollSchema = mongoose.Schema({

    pollTitle: {
    type: String,
    required: true,
  },
  initiatedBy: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  userName:{
      type:String,
      required:true
  }
  
});

var Poll = (module.exports = mongoose.model("polls", pollSchema));
