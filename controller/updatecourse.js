import coursemodal from "../models/coursemodal.js";

const updatecourse = async (req, res) => {
  
  
         try {
              const updateData = {...req.body};
        
              if (req.file) {updateData.courseImg = req.file.filename};
                      
              const editcourse = await coursemodal.findByIdAndUpdate
                                (req.params.id,updateData)
                              
                  res.status(200).json(editcourse);
        
          } catch (err) {

                res.status(500).json({ msg: err.message });
    
          }    
  
      }

export default updatecourse ;