import coursemodal from "../models/coursemodal.js";


const coursecontrol = async(req,res)=>{

    
    try{
        const{courseName,courseDetail,coursePrice,student,courseNumber,courseDuration,courseProfessor,courseDeadline,lectures,language} = req.body;

        
        console.log(req.body);
        console.log(req.file);

        if(!courseName || !courseDetail || !student || !courseNumber ){
            return res.status(400).json({msg:"some detail required"});
        }

        const courseImg = req.file?.filename;

        const user = await coursemodal.create({

            courseName,
            courseDetail,
            coursePrice,
            student,
            courseNumber,
            courseDuration,
            courseProfessor,
            courseDeadline,
            lectures,
            language,
            courseImg,
        })

        return res.status(200).json({msg:"course add success",user})

    }catch(err){
        return res.status(500).json({msg:err.message});
    }

}

export default coursecontrol;