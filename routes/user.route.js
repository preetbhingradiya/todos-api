import express  from "express";
import { GetLogin, GetRegister, Login, Register, home } from "../controllers/user-controller.js";
import { Auth } from "../middleware/Auth.js";

export const user=express()

user.get("/register",GetRegister)
user.post("/signup",Register)
user.get("/login",GetLogin)
user.post("/login",Login)
user.get('/',Auth,home)