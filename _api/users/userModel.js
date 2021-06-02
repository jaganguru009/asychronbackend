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
            unique: [true, "this is already exit"]
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
            unique: [true, "this is already exit"]
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
            type: String,
            required: true
        },

        drivingLycence: {
            type: String
        },

        adharNumber: { 
            type: Number
        },


        skype_id: {
            type: Number,
            required: true,
            unique: [true, "this is already exit"]

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