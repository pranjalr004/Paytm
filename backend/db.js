const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://pranjalsstudio04:QEGRh3xX7HMOoPHD@cluster0.idmrc.mongodb.net/paytmApp")

const userSchema=mongoose.Schema({
    username:String,
    password:String,
    firstName:String,
    lastName:String,
})

const User=mongoose.model("User",userSchema)

module.exports={
    User
}