import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
    description:{
        type:String,
        require:true
    },
    name:{
        type:String,
        required:true,
    },
    productImage:{
        type:String,
    },
    price:{
        tpye: Number,
        default: 0
    },
    stocks:{
        type:Number,
        default: 0,
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
    ownder:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
},{timestamps:true})

export const Prodcut = mongoose.model("Product",productSchema)