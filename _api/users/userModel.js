var mongoose = require('mongoose');

var userSchema = mongoose.Schema(
    {



        userName:
        {
            type: String,
            required: true,
            unique: [true, "this is already exists"]
        },
      
        
      
            firstName: String,
            lastName: String,
            dob: Date,
            gender: String,
            bloodGroup: String,
            country: String,
            maritialStatus: String,
            panCard:
            {
                type: String 
            },
            password:
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
        

       
            mobile:
            {
                type: Number,
                required: true,
                maxlength: 11,
            },
            workPhone:Number,
            email:
            {
                type: String,
                required: true,
                unique: [true, "this is already exist"]
            },
            Linkedin: {
                type: String
            },
            skypeId:{
                type:String
            },
            permanantAdd: String,
            currentAdd: String,
  

        isLoggedIn: Boolean,

      /*  status:
        {
            type: Boolean,
            required: true
        },
        */
 
        FCMToken: String,

        created:
        {
            type: Date,
            default: Date.now
        },
        lastUpdated:
        {
            type: Date,
            default:Date.now
        },
        createdBy:
        {
            type: String,
            //required: true
        },
        lastUpdatedBy:
        {
            type: String,
            //required: true
        }
    }
);

var User = module.exports = mongoose.model('users', userSchema);