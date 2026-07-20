import crypto from "crypto";
import express from "express";
import enrollmentmodal from "../models/enrollmentmodal.js";


const router = express.Router();



router.post("/verifypayment" , async(req , res)=>{

    try{

        const {razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
                userId,
                courseId
            } = req.body;

        // Signature generate karna
        const body = razorpay_order_id + "|" + razorpay_payment_id;
        
        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(body)
            .digest("hex");
        


         // Signature compare
        if (expectedSignature === razorpay_signature) {

            await enrollmentmodal.create({
            user: userId,
            course: courseId
            });

            return res.status(200).json({
                success: true,
                message: "Payment Verified Successfully"
            });

        }else {

            return res.status(400).json({
                success: false,
                message: "Invalid Signature"
            });
        }   

        }catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

        }    

})

export default router;