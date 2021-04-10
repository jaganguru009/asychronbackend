var mongoose=require("mongoose")

var formSchema=mongoose.Schema(
    {   formId:
        {
        type:Number,
        required:true
        },
        formName:{
             type:String,
             required:true
        },
        formType:{
            type:String,
             required:true
        },
        status:String,
        actions:String
    }
) 

var Form=module.exports=mongoose.model('forms',formSchema);
