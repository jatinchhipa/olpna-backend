import dotenv from "dotenv";
import express from 'express';
import connectToMongo from './db.js';
import userroute from './routes/userroute.js';
import courseroute from './routes/courseroute.js'

import cors from 'cors';
import professorroute from './routes/professorroute.js';
import dashboard from './routes/dashboard.js';
import cartroute from './routes/cartroute.js'
import orderroute from "./routes/orderroute.js"
import verifypayment from "./routes/verifypayment.js"
import mycourse from "./routes/mycourse.js"



dotenv.config();

const app = express();
const port = 9000;

app.use(express.json());
app.use(cors());


app.use('/api', userroute);

app.use("/uploads", express.static("uploads"));
app.use('/' , courseroute);

app.use('/' , professorroute);

app.use('/' , dashboard)

app.use('/' , cartroute)

app.use('/' , orderroute)

app.use('/' , verifypayment)

app.use('/' , mycourse)





connectToMongo();

app.listen(port,(err)=>{
    if(err){
       console.log("server err",err) 
    }
    console.log("server is running",port)
});