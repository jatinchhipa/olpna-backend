import express from "express";
import enrollmentmodal from "../models/enrollmentmodal.js";

const router =express.Router();

router.get("/mycourse/:userId" , async(req , res)=>{

    try{

        const courses = await enrollmentmodal.find({
            user:req.params.userId
        }).populate("course")

        res.status(200).json(courses);

    }catch(err){
        res.status(500).json({msg:err.message})
    }

})

export default router ;