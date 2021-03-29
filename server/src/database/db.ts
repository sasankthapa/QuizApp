import mongoose from 'mongoose';

mongoose.connect(<string>process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
},(err)=>{
    if(err){
        throw new Error('Error connecting to database');
    }
});

