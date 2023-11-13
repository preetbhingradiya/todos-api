import { Todo } from "../model/todo.model.js"

export const GetTodo=(req,res)=>{
    res.render("todo")
}

export const AddTodo=async(req,res)=>{
    let {title,content,image}=req.body

    let todo=await Todo.create({
        title,
        image,
        content,
        isCompleted:true
    })

    res.send(todo)
}

export const TodoPage=(req,res)=>{
    res.render("todopage")
}

export const AllTodo=async(req,res)=>{
    let todo=await Todo.find()
    res.json(todo)
}

export const RemoveTodo=async(req,res)=>{
    await Todo.findByIdAndDelete(req.params.id)
    res.render("todopage")
}