import professormodal from "../models/professormodal.js";

const deleteprofessor = async (req,res)=>{

    try{
        
        await professormodal.findByIdAndDelete(req.params.id);

        return res.status(200).json({msg:"professor delete"});

    }catch(err){
        return res.status(500).json({msg:err.message})
    }

}


export default deleteprofessor;