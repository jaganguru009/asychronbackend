var mongoose=require("mongoose")

var certificateSchema=mongoose.Schema(
    {
        name:String,
        description:String,
        typeCertificate:String,

    }
    )

    var Certificate =mongoose.exports=mongoose.model("users",certificateSchema)