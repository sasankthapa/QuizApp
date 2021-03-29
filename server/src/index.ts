import express from 'express';
import QuestionRouter from './router/question';
require('./database/db');

const app=express();

app.use(express.json());

//Test
app.get('/',(_,res)=>{
    res.send('Hello');
})

app.use(QuestionRouter);

app.listen(3001, ()=>{
    console.log('App is listening on 3001');
})
