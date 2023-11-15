import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image:{
    type:String,
  },
  content: {
    type: String,
    required: true,
  },
  isCompleted: {
    type:Boolean,
    default:false
  },
  userId:{
    type:mongoose.Schema.ObjectId,
    ref:"User",
    required:true,
  }
});

export const Todo=mongoose.model("todo",TodoSchema)