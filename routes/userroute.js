import express, { json } from 'express';
import usermodal from '../models/usermodal.js';
import bcrypt, { genSalt } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const router = express.Router();


router.post('/sign',async(req,res)=>{

    try{
        const{name,email,phone,course,password} = req.body;

        if(!name|| !email|| !phone|| !course || !password){
            return res.status(400).json({msg:"All Feild Required"})
        }

        if(!email.includes('@')){
              return res.status(400).json({msg:"please enter vailid email"})  
        }

        const exist = await usermodal.findOne({email});

        if(exist){
            return res.status(400).json({msg:"user already exist"})
        }


        const salt = await bcrypt.genSalt(10);

        const hashedpassword = await bcrypt.hash(password,salt);

        const user = await usermodal.create({
            name,email,phone,course,
                                     password:hashedpassword,
        })

           res.json({msg:"signup succesfully",user}) 

           console.log(req.body);

    }catch(err){
        res.status(500).json({msg:err.message});
    }

});



router.post('/login', async(req,res)=>{

    try{
        const{email,password}=req.body;

        if(!email|| !password){
           return res.status(400).json({msg:"all feild required"});
        }

        const user = await usermodal.findOne({email});

        if(!user){
            return res.status(400).json({msg:"user not found"});
        }


        const isMatch = await bcrypt.compare(password,user.password);

        if(isMatch){
            const token = jwt.sign({userId:user.id},process.env.JWT_SECRET,{
                expiresIn:"5d"
            })

            res.status(201).json({token,msg:"login successfully"})
        }

        else{
            return res.status(400).json({msg:"worng password"})
        }

    }catch(err){
            res.status(500).json({msg:err.message});
    }

});



    
    router.get('/getusers' , async(req,res)=>{

        try{
            const user = await usermodal.find();
            
            res.status(200) .json(user)

        }catch(err){
            res.status(500).json({msg:err.msg});
        }

    });




    router.get('/user/:id' , async(req,res)=>{

        try{
            const user = await usermodal.findById(req.params.id);
            
            res.status(200) .json(user)

        }catch(err){
            res.status(500).json({msg:err.msg});
        }

    });




    router.patch('/edit/:id' , async(req,res)=>{

        try{
            
            const edituser = await usermodal.findByIdAndUpdate
                (req.params.id , req.body) 
                
               res.status(200).json(edituser) 

        }catch(err){
            res.status(500).json({msg:err.msg});

        }
    });




    router.delete('/delete/:id' , async(req,res)=>{

        try{
           
            const user = await usermodal.findByIdAndDelete(req.params.id);

            res.status(200).json({msg:"user delete successfully"})

        }catch(err){
            res.status(500).json({msg:err.msg})
        }

    })


export default router;