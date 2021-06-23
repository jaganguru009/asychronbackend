var mongoose = require("mongoose");

var pollSchema = mongoose.Schema({

	userName:String,
	pollTitle:String,
	initiatedBy:String,
	priority:String,
	status:{
    type:String,
    default:'pending'
  },
	question:String,
	createdBy:String,
	voteType: String,
	options:[],
	vote: Number,
	type: String
  
});

var Poll = (module.exports = mongoose.model("polls", pollSchema));
