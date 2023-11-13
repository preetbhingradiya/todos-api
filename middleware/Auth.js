import jwt from "jsonwebtoken";
import { User } from "../model/user.model.js";
export const Auth=async(req,res,next)=>{
    let { token } = req.cookies;
   if(token){
    let decode= jwt.verify(token,process.env.PRIVATE_KEY);
    let {id}=decode
    req.user=await User.findById(id)
   next()
   }
   else{
    res.status(400).json({success:false,message:"Plaese Login First"})
   }
}