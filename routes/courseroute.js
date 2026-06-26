import express from 'express';
import coursemodal from '../models/coursemodal.js';
import multer from 'multer';
import upload from '../middleware/multer.js'
import coursecontrol from '../controller/coursecontrol.js';




const router = express.Router();

router.post('/course' , upload.single("courseImg") , coursecontrol);


router.get('/getcourse' , async (req , res)=>{

    try{
        const course = await coursemodal.find();

        return res.status(200).json(course)

    }catch(err){
        res.status(500).json({msg:err.message})
    }
    
});



router.get('/course/:id' , async(req,res)=>{

    try{

        console.log(req.params.id)

        const course = await coursemodal.findById(req.params.id);
        
        return res.status(200).json(course);

    }catch(err){
        res.status(500).json({msg:err.message});
    }

});


router.patch("/editcourse/:id",upload.single("courseImg"), async (req, res) => {
  
  
         try {
              const updateData = {...req.body,};
        
              if (req.file) {updateData.courseImg = req.file.filename};
                      
              const editcourse = await coursemodal.findByIdAndUpdate
                                (req.params.id,updateData)
                              
                  res.status(200).json(editcourse);
        
          } catch (err) {

                res.status(500).json({ msg: err.message });
    
          }    
  
      }
      );




     router.delete('/coursedelete/:id' , async(req,res)=>{

        try{
          const course = await coursemodal.findByIdAndDelete(req.params.id);

            return res.status(200).json({msg:"course delete"});

        }catch(err){
            res.status(500).json({msg:err.message})
        }

     }) ;





export default router;