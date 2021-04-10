var mongoose=require("mongoose")
const { default: validator } = require("validator")

var profileSchema= mongoose.Schema(

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
            required:true,
            unique:[true,"email is already present"],
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("invalid emaik ")
                }
            }
        },
        department:{
            type:String,
            required:true
        },
        designaton:{
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
        shift:{
            type:Number,
            required:true
        }
    }
)

var Profile = module.exports=mongoose.model('profile',profileSchema);