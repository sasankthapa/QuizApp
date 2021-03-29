import {Router} from 'express';
import Question from '../model/questions';

const router=Router();

router.get('/allquestions',async(_,res)=>{
    try{
        const questions=await Question.find({});
        res.send(questions);
    }catch(e){
        res.sendStatus(500)
    }
})

router.post('/question',async(req,res)=>{
    console.log('natoheu');
    try{
        console.log({...req.body})
        const question=new Question({
            ...req.body
        })
        await question.save();
        res.status(201).send(question.toJSON())
    }catch(e){
        console.log(e);
        res.sendStatus(400);
    }
})

export default router;
