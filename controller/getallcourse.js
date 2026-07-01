import coursemodal from "../models/coursemodal.js";


const getallcourse = async (req , res)=>{

    try{
        const course = await coursemodal.find();

        return res.status(200).json(course)

    }catch(err){
        res.status(500).json({msg:err.message})
    }
    
}

export default getallcourse;