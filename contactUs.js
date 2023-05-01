const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema(
    {
        name:String,
        email:String,
        phone:String,
        message:String,
    },
    {
        collection:'ContactUs'
    }
)
mongoose.model("ContactUs", userDetailsSchema)

const addressInfoSchema = new mongoose.Schema(
    {
        Address:String,
        Phone:String,
        Email:String
    },
    {
        collection:'ContactInfo'
    }
)

mongoose.model("ContactInfo", addressInfoSchema)


