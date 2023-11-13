import express from "express"
import  {config}  from  "dotenv"
import { connect } from "./config/db.js";
import { user } from "./routes/user.route.js";
import cookie from "cookie-parser"
import { todo } from "./routes/todo-route.js";
config({path:"./config/config.env"}) 

const app=express()
app.use(cookie())
app.use(express.json())
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}))

app.use("/api/v1/user",user)
app.use("/api/v1/todo",todo)

app.listen(process.env.PORT,()=>{
    console.log(`connect to port ${process.env.PORT}`);
    connect()
})