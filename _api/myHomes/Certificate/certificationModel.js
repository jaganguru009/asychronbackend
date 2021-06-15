var mongoose=require("mongoose")

var certificateSchema=mongoose.Schema(
    {
        userName:String,
        name:String,
        description:String,
        typeCertificate:String,
        updatedOn:{
            type:Date,
            default:Date.now
        }
       

    }
     )

    var Certificate =module.exports=mongoose.model("certificates",certificateSchema);
    