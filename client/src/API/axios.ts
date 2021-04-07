import axios from 'axios';
import {questionType} from '../types/questions.types';

const baseUrl='http://localhost:3001';

export const getAllQuestions=async():Promise<Array<questionType>>=>{
    const res=await axios.get<Array<questionType>>(baseUrl+'/allquestions');
    return res.data;
}

// use the _id that we have for each question
// TODO: generate random _id so that we don't
// use the database id
export const checkQuestion=async(questionId:questionType["_id"],answer:string):Promise<boolean>=>{
    const res=await axios.post<boolean>(baseUrl+'/checkQuestion',{
        _id:questionId,
        answer
    })
    return res.data;
}
