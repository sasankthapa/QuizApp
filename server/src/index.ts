import express from 'express';
import cors from 'cors';
import QuestionRouter from './router/question';
require('./database/db');

const app=express();

app.use(cors());
app.use(express.json());

//Test
app.get('/',(_,res)=>{
    res.send('Hello');
})

app.use(QuestionRouter);

app.listen(process.env.port, ()=>{
    console.log(`App is listening on ${process.env.port}`);
})
