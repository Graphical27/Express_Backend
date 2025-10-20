import mongoose from "mongoose";

const HospitalSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    address1:{
        type:String,
    },address2:{
        type:String,
    },address3:{
        type:String,
    },address4:{
        type:String,
    },
    pincode:{
        type:String,
    },
    specilizedIn:[{
        type:String
    }]
},{timestamps: true})


export const Hospital = new mongoose.model("Hospital", HospitalSchema)