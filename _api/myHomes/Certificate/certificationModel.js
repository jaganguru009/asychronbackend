var mongoose=require("mongoose")

var certificateSchema=mongoose.Schema(
    {
        name:String,
        description:String,
        typeCertificate:String,
        userName:String

    }
     )

    var Certificate =module.exports=mongoose.model("certificates",certificateSchema);
    