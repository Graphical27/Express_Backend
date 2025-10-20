import mongoose from "mongoose";

const doctordSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experienceInYear:{
        type:Number,
        default:0
    },
    worksInHospital:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"hospital"
        }
    ]

},{timestamps: true})


export const Doctor = new mongoose.model("Doctor", doctordSchema)