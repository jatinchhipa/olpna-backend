import coursemodal from "../models/coursemodal.js";

const getonecourse = async(req,res)=>{

    try{

        console.log(req.params.id)

        const course = await coursemodal.findById(req.params.id);
        
        return res.status(200).json(course);

    }catch(err){
        res.status(500).json({msg:err.message});
    }

}

export default getonecourse;