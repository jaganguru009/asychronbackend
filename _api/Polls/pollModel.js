var mongoose = require('mongoose');


var pollSchema = mongoose.Schema(
    {
        pollTitle:{
            type:String,
            required:true
        },
        initiatedBy:{
            type:String,
            required:true
        },
        priority:{
            type:String
        },
        status:{
            type:String
        }
    }
);

var Poll = module.exports = mongoose.model('polls',pollSchema)