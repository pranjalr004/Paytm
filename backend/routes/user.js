const express=require("express")
const router=express.Router()
const Zod=require("zod")
const jwt=require("jsonwebtoken")
const { User } = require("../db")
const JWT_SECRET = require("../config")
const signupSchema=Zod.object({
    username:Zod.string(),
    password:Zod.string(),
    firstName:Zod.string(),
    password:Zod.string()
})

router.post("/signup",async(req,res)=>{
    const body=req.body
    const {success}=signupSchema.safeParse(req.body)
    if(!success){
        return res.json({
            message:"Email already taken /Incorrect Inputs"
        })
    }
    const user=User.findOne({
        username:body.username
    })

    if(user._id){
        return res.json({
            message:"Email already taken / Incorrect Inputs"
        })
    }

    const dbUser=await User.create(body)
    const token=jwt.sign({
        userId:dbUser._id
    },JWT_SECRET)
        res.json({
            message:"User created Successfully",
            token:token
        })
    })

module.exports=router