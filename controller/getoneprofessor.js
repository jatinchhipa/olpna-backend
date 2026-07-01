import professormodal from "../models/professormodal.js";

const getoneprofessor = async(req,res)=>{

        try{
            const professor = await professormodal.findById(req.params.id);

            console.log(req.params.id);

            return res.status(200).json(professor)

        }catch(err){
            return res.status(500).json({msg:err.message});
        }

};

export default getoneprofessor;