import { User } from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const GetRegister = (req, res) => {
  res.render("register");
};

export const Register = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    let hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashPassword,
    });
    res.send(user);
  } catch (error) {
    res.send(error.message);
  }
};

export const GetLogin = (req, res) => {
  res.render("login");
};

export const Login = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await User.findOne({ email });
    // res.send(user)
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "User Not Found" });

    let comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword)
      return res
        .status(400)
        .json({ success: false, message: "please check Email or Password" });

    let token = jwt.sign({ id: user.id }, process.env.PRIVATE_KEY);
    res.cookie("token", token, { maxAge: 2 * 60 * 1000 }).send({success:true,message:`Welcome back ${user.username}🖐`});
  } catch (error) {
    res.send(error);
  }
};

export const home =async (req, res) => {
  res.send(req.user)
};
