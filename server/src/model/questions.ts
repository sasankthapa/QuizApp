import mongoose, { Schema} from 'mongoose';
import {IOptionDocument, IQuestionDocument} from '../types/question.types';

const optionSchema=new Schema<IOptionDocument>({
    option:{
        type:String,
        required:true,
        trim:true
    }
});

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

const Question=mongoose.model('Question',questionSchema);

export default Question;
