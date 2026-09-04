import mongoose from "mongoose";

const connectDB = async()=>{
    await mongoose.connect(process.env.MONGODB_URL);

    mongoose.connection.on('connected',()=>{
        console.log('MongoDB connected successfully');
    })

    console.log("hello");
    
}

export default connectDB;