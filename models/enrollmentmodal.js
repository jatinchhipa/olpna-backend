import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"usermodal",
        required:true
    },

    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"coursemodal",
        required:true
    }


}, { timestamps: true });


export default mongoose.model("enrollment", enrollmentSchema);