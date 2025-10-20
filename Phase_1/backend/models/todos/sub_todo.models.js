
import mongoose, { Mongoose } from "mongoose";


const subTodos = new mongoose.Schema({
    content:{
        type:String,
        required: true
    },
    complete:{
        type: Boolean,
        default:false
    },
    createdBy:{
        tpye: Mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps: true});


export const subTodo = mongoose.model("Todo",subTodos);