import mongoose , {model, mongo} from "mongoose";

const {Schema} = mongoose;

const CourseSchema = new Schema({

    courseName:{
        type:String,
        required:true
    },

    courseDetail:{
        type:String
    },

    coursePrice:{
        type:Number,
        required:true    
    },

    student:{
        type:String
    },

    courseNumber:{
        type:String
    },

    courseDuration:{
        type:String
    },

    courseProfessor:{
        type:String
    },

    courseDeadline:{
        type:Date
    },

    lectures:{
        type:String
    },

    language:{
        type:String
    },

    courseImg:{
        type:String
    },

});

export default model('coursemodal',CourseSchema);
