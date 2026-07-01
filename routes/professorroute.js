import express from 'express';
import multer from 'multer';
import upload from '../middleware/multer.js';

import professormodal from '../models/professormodal.js';
import createprofessor from '../controller/createprofessor.js';
import getallprofessor from '../controller/getallprofessor.js';
import deleteprofessor from '../controller/deleteprofessor.js';
import updateprofessor from '../controller/updateprofessor.js';
import getoneprofessor from '../controller/getoneprofessor.js';






const router = express.Router();

router.post('/professor',upload.fields([{ name: "certificateImg", maxCount: 1 }, { name: "professorImg", maxCount: 1 }]) , createprofessor);
                                           

router.get('/getprofessor' , getallprofessor);

router.delete('/deleteprofessor/:id' , deleteprofessor);

router.patch('/updateprofessor/:id' ,upload.fields([{ name: "certificateImg", maxCount: 1 }, { name: "professorImg", maxCount: 1 }]) ,updateprofessor);

router.get('/professor/:id' , getoneprofessor);



export default router;