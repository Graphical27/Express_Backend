import dotenv from "dotenv";
import connectDB from "./db/index.js";

connectDB();

dotenv.config({ 
    path: './env' 
});



// import express from 'express';
// const app = express();
// ;(async () => {
//     try{
//         await mongoose.connect('${process.env.MONGO_URI}/${DB_NAME}}');
//         app.on('error', (err) => console.error(err));
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         })
//     }catch(error){
//         console.log("Error", error);
//     }
// })()