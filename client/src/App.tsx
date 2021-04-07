import React, {useEffect, useState} from 'react';
import {getAllQuestions} from './API/axios';
import './App.css';
import Question from './component/Question/question';
import {questionType} from './types/questions.types';

const App:React.FC<{}>=()=>{
    const [questions,setQuestions]=useState<Array<questionType>>([]);
    const [correct,setCorrect]=useState(0);
    const [attempted,setAttempted]=useState(0); 
    // We use normal css classes rather than importing css modules
    // since our app is very small

    useEffect(()=>{
        getAllQuestions().then((questions)=>{
            setQuestions(questions);
            console.log(questions);
        })
    },[])

    const updateQuestionArray=(_id:string, correct:boolean)=>{
        var newQuestion=questions.map((ele)=>{
            if(ele._id===_id){
                ele['correct']=correct; 
                ele['attempted']=true;
                if(correct)
                    setCorrect((prev)=>prev+1)
                setAttempted((prev)=>prev+1)
            }
            return ele;
        })
        setQuestions(newQuestion);
    }
   
    useEffect(()=>{
        if(attempted === questions.length)
            window.scrollTo(0,0);
    },[attempted])

    return <div className="App">
        <div className="summaryContainer">
            {attempted<questions.length?<h2>{"Please take the quiz below:"}</h2>:
            <>
                <h3>{"Thanks for taking the quiz"}</h3>
                <h4>{"You got "}{correct}{'/'}{questions.length}</h4>
            </>}
        </div>
        <div className="questionContainer">
            {questions.map((currQuestion,index)=>{
                return <Question key={index} question={currQuestion}
                    updateQuestions={updateQuestionArray}/>
            })}
        </div>
    </div>
}

export default App;
