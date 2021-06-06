var mongoose = require("mongoose")

var userSchema = mongoose.Schema(

    {
        persionalDetails: {
            firstName: String,
            lastName: String,
            dob: Date,
            gender: String,
            bloodGroup: String,
            country: String,
            maritialStatus: String,
            panCard:
            {
                type: String,
                required: true
            },
            password: password,
            drivingLycence: String,
            adharNumber: Number



        },
        contactDetails: {
            mobile:
            {
                type: Number 
            },
            
            persionalAdd: String,
            currentAdd: String,
            Linkedin: String,


        },
        userName:String,
        password:String

    }
)

var Details = module.exports = mongoose.model("details", userSchema);
