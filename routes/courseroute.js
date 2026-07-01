import express from 'express';
import coursemodal from '../models/coursemodal.js';
import multer from 'multer';
import upload from '../middleware/multer.js';
import createcourse from '../controller/createcourse.js'
import getallcourse from '../controller/getallcourse.js';
import getonecourse from '../controller/getonecourse.js';
import updatecourse from '../controller/updatecourse.js';
import deletecourse from '../controller/deletecourse.js';




const router = express.Router();



    router.post('/course' , upload.single("courseImg") , createcourse);

    router.get('/getcourse' , getallcourse);

    router.get('/course/:id' , getonecourse );

    router.patch("/editcourse/:id",upload.single("courseImg"), updatecourse);
      
     router.delete('/coursedelete/:id' ,deletecourse) ;





export default router;