import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connectionString = "mongodb+srv://gathikacolambage:93Yj4STRhydgilsQ@cluster0.qhe22wu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
        if (!connectionString) {
            throw new Error("Please add the connection string")
        }
        await mongoose.connect(connectionString);
        console.log("DB connections successful!");
    } catch (error) {
        console.log("DB connections failed!");
        console.log(error);
    }
} 