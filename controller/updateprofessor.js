import professormodal from "../models/professormodal.js";

const updateprofessor = async(req,res)=>{

   try{ 

    const updateData = {...req.body};

    if (req.files?.professorImg) {
    updateData.professorImg = req.files.professorImg[0].filename;
    }

    if (req.files?.certificateImg) {
    updateData.certificateImg = req.files.certificateImg[0].filename;
    }

    const editprofessor = await professormodal.findByIdAndUpdate(req.params.id.updateData);

    return res.status(200).json(editprofessor)

    }catch(err){
        console.log({msg:err.message});
    }

}


export default updateprofessor;