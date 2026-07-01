import professormodal from "../models/professormodal.js";


const getallprofessor = async(req,res)=>{

    try{
        const professor = await professormodal.find();

        return res.status(200).json(professor);

    }catch(err){
        console.log({msg:err.message})
    }

}


export default getallprofessor;