const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config()
const cors = require("cors");
app.use(cors());

app.use(express.json());

const mongoose = require("mongoose")
const mongoUrl = process.env.DB_HOST;  //db connection string

mongoose.connect(mongoUrl, {
  useNewUrlParser: true
}).then(() => {
  console.log("Connected to the Database")
}).catch((e) =>
  console.log(e)
)


require("./contactUs")
const user = mongoose.model("ContactUs")

require("./aboutMe")
const about = mongoose.model("AboutMe")

require("./contactUs")
const addInfo = mongoose.model("ContactInfo")


app.post("/api/ContactUs", async (req, res) => {
  const { name, email, phone, message } = req.body;
  try {
    await user.create({
      name,
      email,
      phone,
      message,
    });
    console.log(name, email, phone, message);
    res.send({ status: "ok" });
  } catch (error) {
    // console.log(error);
    res.status(500).send({ status: "error" });
  }
});


app.get("/api/GetAllContactUs", async (req, res) => {
  try {
    const registers = await user.find({})
    res.send({ status: "ok", data: registers })
    // console.log(registers)
  } catch (error) {
    console.log(error)
  }
})

app.get("/api/GetAboutMe", async (req, res) => {
  try {
    // const version = 'latest';
    const pare = await about.find({ 'version' : 'latest' })
    res.send({ status: "ok", data: pare })
    // console.log(pare)
  } catch (error) {
    console.log(error)
  }
})

app.get("/api/GetAddressInfo", async (req, res) => {
  try {
    const add = await addInfo.find()
    res.json({data: add })
    // res.json(add)
    console.log(add)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Internal server error' });
  }
})

app.listen(5000, () => {
  console.log("Server Started")
})
