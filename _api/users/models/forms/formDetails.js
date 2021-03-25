var mongoose=require("mongoose")

var formSchema=mongoose.Schema(
    {   formId:
        {
        type:Number,
        required:true
        },
        formName:String,
        formType:String,
        status:String,
        actions:String
    }
)