import React, {useState} from 'react'; 
import {checkQuestion} from '../../API/axios';
import {questionType} from '../../types/questions.types';
import './Question.css';

interface QuestionInterface{
    question:questionType;
    updateQuestions(_id:string,current:boolean):void;
}

const Question:React.FC<QuestionInterface>=({question,updateQuestions})=>{

    const [currentSelected,setCurrentSelected]=useState('');

    const handleCheckClick=()=>{
        checkQuestion(question._id,currentSelected).then((correct)=>{
            updateQuestions(question._id,correct);
        });
    }

    return <div className="question">
        <h2 className="title">
            {question.question}
        </h2>
        {question.options.map((option,index)=>{
            //we are using {options+index} as key just in case options are the same
            return <div key={option+index} className="formControl">
                {question.attempted?
                    <input id={option+index} type="radio" name={question.question} disabled
                        onChange={()=>setCurrentSelected(option)}/>:
                    <input id={option+index} type="radio" name={question.question}
                        onChange={()=>setCurrentSelected(option)}/>
                }
                <label htmlFor={option+index}>{option}</label>
            </div>
        })}
        {question['attempted']?question['correct']?<div className="correct">Correct!</div>:
        <div className="incorrect">Wrong, Try Again later.</div>:
        <div className="formControl button">
            <button onClick={handleCheckClick}>Check</button>
        </div>}
    </div>
}

export default Question;
