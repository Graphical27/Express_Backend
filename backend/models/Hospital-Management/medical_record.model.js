import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    patient_id:{
        type:String,
    },
    patient_name:{
        type:String,
    },
    
},{timestamps: true})


export const Medical_Record = new mongoose.model("Medical_Record", medicalRecordSchema)