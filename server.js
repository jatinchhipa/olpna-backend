import express from 'express';




const app = express();
const port = 9000;

app.use(express.json());









app.listen(port,(err)=>{
    if(err){
       console.log("server err",err) 
    }
    console.log("server is running",port)
});