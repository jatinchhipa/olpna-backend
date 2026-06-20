import mongoose from "mongoose";


const connectToMongo = async()=>{

     try{
        await mongoose.connect(
          'mongodb://127.0.0.1:27017/olpnadatabase'
        )

        console.log("mongoDB connect") ;

     }catch(error){
          console.error("DB error")  
          process.exit(1);
     }   

}

export default connectToMongo;