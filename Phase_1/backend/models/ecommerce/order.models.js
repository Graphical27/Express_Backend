import mongoose, { mongo, Query } from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity:{
        type:Number,
        required:true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        types:[orderItemSchema],
        required:true
    },
    address:{
        type:String,
        required: true
    },
    status:{
        type: String,
        enum:["pending","cancelled","delivered"],
        default:"pending"
    }
},{timestamps: true})

export const Order = mongoose.model("Order",orderSchema)