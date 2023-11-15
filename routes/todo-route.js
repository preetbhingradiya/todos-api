import express  from "express";
import { Auth } from "../middleware/Auth.js";
import { AddTodo, AllTodo, GetTodo, RemoveTodo, TodoPage } from "../controllers/todo-controller.js";

export const todo=express()

todo.get("/",GetTodo)
todo.post('/add',Auth,AddTodo)
todo.get("/page",TodoPage)
todo.get('/all',AllTodo)
todo.get('/delete/:id',RemoveTodo)