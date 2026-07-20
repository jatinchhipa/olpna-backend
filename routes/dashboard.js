import express from 'express';
import coursemodal from '../models/coursemodal.js';
import professormodal from '../models/professormodal.js';
import usermodal from '../models/usermodal.js';



const router = express.Router();


router.get('/dashboard' , async(req , res)=>{

    try{

       const totalCourse = await coursemodal.countDocuments();
       const totalProfessor = await professormodal.countDocuments();
       const totalUser = await usermodal.countDocuments(); 


       const recentCourse = await coursemodal
                            .find()
                            .sort({createdAt: -1 })  
                            .limit(4);  
                            
       const recentProfessor =await professormodal
                              .find()
                              .sort({createdAt:-1})
                              .limit(4);
                              
        const recentUser = await usermodal
                           .find()
                           .sort({createdAt:-1})
                           .limit(4);   


       return res.status(200).json({
              totalCourse,
              totalProfessor,
              totalUser,
              recentCourse ,
              recentProfessor,
              recentUser 
         });

    }catch(err){
        res.status(500).json({msg:err.message})
    }


});


export default router;