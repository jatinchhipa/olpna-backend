import express from 'express';
import connectToMongo from './db.js';
import userroute from './routes/userroute.js';
import cors from 'cors';



const app = express();
const port = 9000;

app.use(express.json());
app.use(cors());


app.use('/api', userroute);






connectToMongo();

app.listen(port,(err)=>{
    if(err){
       console.log("server err",err) 
    }
    console.log("server is running",port)
});