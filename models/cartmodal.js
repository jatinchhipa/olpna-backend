import mongoose, { mongo, Schema } from "mongoose";


 const cartSchema = new mongoose.Schema(

    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref: "usermodal",
            required:true,
        },

        course:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"coursemodal",
            required:true,
        },

        quantity:{
            type:Number,
            default:1,
        },

    },

     {timestamps:true,}

 );


const cart = mongoose.model("cart" , cartSchema);

export default cart;