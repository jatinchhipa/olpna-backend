import coursemodal from "../models/coursemodal.js";

const deletecourse = async(req,res)=>{

        try{
          const course = await coursemodal.findByIdAndDelete(req.params.id);

            return res.status(200).json({msg:"course delete"});

        }catch(err){
            res.status(500).json({msg:err.message})
        }

     }

export default deletecourse;