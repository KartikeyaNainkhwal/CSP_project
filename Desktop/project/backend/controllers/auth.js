import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js";

export const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"User not found"})
        }
        const match=await bcrypt.compare(password,user.password);
        if(!match){
            return res.status(500).json({message:"Wrong password"})
        }
        //generate token
        const token=jwt.sign({id:user._id},"KartIsCoding")  //JWTSECRET we can also do fron.env
        delete user.password;
        res.status(200).json({token,user});
    }
    catch(e){
        res.status(500).json({error:e.message});
    }
}


    export const register=async (req,res)=>{
        try{
            const {firstName,lastName,email,password,picturePath,friends,location,occupation,}=req.body;
        const salt=await bcrypt.genSalt();
        const hashedpassword=await bcrypt.hash(password,salt);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedpassword,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 10000),
            impressions: Math.floor(Math.random() * 10000),
        })
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
        }
        catch(e){
            res.status(500).json({error:e.message});
        }
    }