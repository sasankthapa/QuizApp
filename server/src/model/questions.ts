import mongoose, { Schema} from 'mongoose';
import {IQuestionDocument} from '../types/question.types';

const questionSchema=new Schema<IQuestionDocument>({
    question:{
        type:String,
        required:true,
        trim:true
    },
    options:[{
        type:String,
        required:true,
        trim:true
    }],
    answer:{
        type:String,
        required:true,
        trim:true
    }
})

const Question=mongoose.model<IQuestionDocument>('Question',questionSchema);

export default Question;
