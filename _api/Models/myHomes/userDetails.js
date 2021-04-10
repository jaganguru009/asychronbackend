var mongoose =require("mongoose")

var userDetails= mongoose.Schema(

    {
        persionalDetails:{
            firstName:String,
            lastName:String,
            dob:Date,
            gender:String,
            bloodGroup:String,
            country:String,
            maritialStatus:String,
            panCard:
            {
                type:String,
                required:true
            },
            password:password,
            drivingLycence:String,
            adharNumber:Number

            

        },
        contactDetails:{
            mobile:
            {
               type: Number,
               required:true,
               maxlength:11,
            },
            skype_id:{
                type:Number,
                required:true,
                unique:[true,"this is already exit"]
                
            },
            persionalAdd:String,
            currentAdd:String,
            Linkedin:String,


        }

     }
)

var Details= module.exports=mongoose.model("details",userDetails);
