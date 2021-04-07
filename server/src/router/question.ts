import {Router} from 'express';
import Question from '../model/questions';

const router=Router();

// This should be pulled into a separate class and imported
// We shuffle the questions before we send it
// frontend might be slower so we shuffle it before we send it
const shuffleArray=(array:Array<any>)=> {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

// TODO: add pagination
router.get('/allquestions',async(_,res)=>{
    try{
        const questions=await Question.find({});
        const toReturn=questions.map((question)=>{
            var curr=question.toJSON();
            delete question.answer;
            delete question.__v;
            return curr;
        })
        //before sending questions remove the answer field
        res.send(shuffleArray(toReturn));
    }catch(e){
        res.sendStatus(500)
    }
})

router.post('/question',async(req,res)=>{
    try{
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

router.post('/checkQuestion', async(req,res)=>{
    try{
        const question=await Question.findOne({_id:req.body._id});
        if(question.answer===req.body.answer){
            res.send(true);
        }else{
            res.send(false);
        }
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;
