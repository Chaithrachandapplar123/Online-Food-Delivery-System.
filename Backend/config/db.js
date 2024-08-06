import mongoose from "mongoose"
import mangoose from "mongoose"



 export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://Createstack:21072003@cluster0.59dj6bk.mongodb.net/Project').then(()=>console.log("DB Connected"));
}