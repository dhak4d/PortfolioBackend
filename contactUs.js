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
        address:String,
        phone:String,
        email:String
    },
    {
        collection:'ContactInfo'
    }
)

mongoose.model("ContactInfo", addressInfoSchema)


