import Razorpay from "razorpay";
import express from "express"

const router=express.Router();


const razorpay = new Razorpay({

    key_id: "rzp_test_TDiixFEL285jw3",
    key_secret: "6GzEM5PuvYSGNZNTTOtMTDsk"

})

router.post("/orderpay" , async (req,res)=>{

    try{

        const{amount} = req.body;

        const order = await razorpay.orders.create({
            amount: amount*100,
            currency:"INR"
        })

        res.json(order)

    }catch(err){
         console.error("Razorpay Error:", err);
        res.status(500).json(err);
    }

});

export default router;