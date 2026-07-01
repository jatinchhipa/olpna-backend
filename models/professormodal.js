import mongoose,{model} from "mongoose";

const {Schema} = mongoose;

const ProfessorSchema = new Schema({


    name:{
        type:String
    },

    gender:{
        type:String
    },

    department:{
        type:String
    },

    about:{
        type:String
    },

    certificate:{
        type:String
    },

    certificateImg:{
        type:String
    },
    

    education:{
        type:String
    },

    univercity:{
        type:String
    },

    experience:{
        type:String
    },

    experienceUrl:{
        type:String
    },

    professorImg:{
        type:String
    },


});

export default model('professormodal' , ProfessorSchema);