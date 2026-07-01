import professormodal from "../models/professormodal.js";

const createprofessor = async(req,res)=>{

    try{
        const{name,gender,department,about,certificate,education,univercity,experience,experienceUrl}
            =req.body;

            console.log(req.body);
            console.log(req.files);

        
            const professorImg = req.files?.professorImg?.[0]?.filename;
            const certificateImg = req.files?.certificateImg?.[0]?.filename; 

        
        const professor = await professormodal.create({
            name,
            gender,
            department,
            about,
            certificate,
            certificateImg,
            education,
            univercity,
            experience,
            experienceUrl,
            professorImg,
        })

        return res.status(200).json({msg:"professor add suceessfully",professor});

    }catch(err){
        return res.status(500).json({msg:err.message});
    }

}

export default createprofessor ; 