import mongoose from "mongoose";
import { title } from "process";

const jobSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    }
})