import cart from "../models/cartmodal.js";

const addcart = async(req , res)=>{

    try{

        const{userId , courseId} =req.body;

        if(!userId || !courseId){
        
            return res.status(400).json({
                msg:"userId courseId required"
            })
        };

        const existingCart = await cart.findOne({
            user: userId,
            course: courseId
        });

        if(existingCart){
            return res.status(400).json({
                msg:"course already in add cart"
            })
        }

        const addCart = await cart.create({

            user: userId,
            course: courseId,
            quantity :1,

        });

        return res.status(200).json({
            msg: "course addcart successfully" , addCart
        });

    }catch(err){
        return res.status(500).json({
            msg: err.message
        });
    }

}

export default addcart;