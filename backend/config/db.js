import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://arnavkataria77:mydream1@cluster0.4kzpkfn.mongodb.net/LotusBazaar")
    .then(()=> console.log('DB connected'))
}