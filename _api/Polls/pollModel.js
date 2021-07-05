var mongoose = require("mongoose");

var pollSchema = mongoose.Schema({

	userName:String,
	respondedBy:String,
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
	vote: String,
	type: String ,
	startDate:Date,
	endDate:Date
  
});

var Poll = (module.exports = mongoose.model("polls", pollSchema));
