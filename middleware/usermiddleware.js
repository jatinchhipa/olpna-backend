import 'dotenv/config';
import jwt from 'jsonwebtoken';


const fetchUser = (req , res , next) =>{
    const token = req.header('Authorization');

    if(!token){
        return res.status(401).json({msg:"token required"})
    }

    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET) 

        req.userId = decoded.userId;
          next();  

    }catch(err){
        return res.status(401).json({msg:"token required"});
    }
}


export default fetchUser;