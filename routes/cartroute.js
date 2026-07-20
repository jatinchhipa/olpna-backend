import express from 'express';
import cart from '../models/cartmodal.js';
import addcart from '../controller/addcart.js';
import { populate } from 'dotenv';
import coursemodal from '../models/coursemodal.js';


    
const router = express.Router();


router.post('/cart' , addcart);



router.get('/cart/:userId' , async(req ,res)=>{

    try{
        const cartItem = await cart.find({
            user:req.params.userId
        }).populate("course")

        return res.status(200).json(cartItem)

    }catch(err){
        return res.status(500).json({msg:err.message})
    };

});



export default router;