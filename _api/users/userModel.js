var mongoose = require('mongoose');

var userSchema = mongoose.Schema(
    {


        name:
        {
            firstName: String,
            lastName: String
        },

        userName:
        {
            type: String,
            required: true,
            unique: [true, "this is already exists"]
        },
        password:
        {
            type: String,
            required: true
        },
        

       
        email:
        {
            type: String,
            required: true,
            unique: [true, "this is already exist"]
        },

        mobile:
        {
            type: Number,
            required: true,
            maxlength: 11,
        },


        persionalDetails: {

            dob: Date,
            gender: String,
            bloodGroup: String,
            country: String,
            maritialStatus: String,
        },

        panCard:
        {
            type: String 
        },

        drivingLycence: {
            type: String
        },

        adharNumber: { 
            type: Number
        },
 
        Address: {
            permanantAdd: String,
            currentAdd: String
        },

        Linkedin: {
            type: String
        },


        empCode:
        {
            type: String,
        },
        role:
        {
            roleId: String,
            roleName: String
        },
        department:
        {
            departmentId: String,
            departmentName: String
        },
        isLoggedIn: Boolean,
        status:
        {
            type: Boolean,
            required: true
        },

        FCMToken: String,

        created:
        {
            type: Date,
            default: Date.now
        },
        lastUpdated:
        {
            type: Date
        },
        createdBy:
        {
            type: String,
            required: true
        },
        lastUpdatedBy:
        {
            type: String,
            required: true
        }
    }
);

var User = module.exports = mongoose.model('users', userSchema);