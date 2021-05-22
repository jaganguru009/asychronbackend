var mongoose=require("mongoose")
//var validator=require('validator');
//var validateEmail =require('../../../shared/utils');




var profileSchema=mongoose.Schema(


    {
        userName:
        {
            type:String,
            required:true

        },
        empCode:
        {
            type:String,
            required:true
        },
        email:
        {
            type:String,
           /* trim :true,
            lowercase:true,
            unique:true,
            required:"Email address is reequired",
            validate:[validateEmail,'please fill a valid email address '],
            match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'please fill valid email add'],
          */
        },
        department:{
            type:String,
            required:true
        },
        designation:{
            type:String,
            required:true
        },
        doj:{
            type:Date,
            required:true
        },
        employeType:{
            type:String,
            required:true
        },
        shiftEmp:{
            type:Number,
            required:true
        }
    }
)

var Profile = module.exports=mongoose.model('profile',profileSchema);