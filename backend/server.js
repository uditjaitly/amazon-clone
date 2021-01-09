import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
dotenv.config();

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazon',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})



app.use('/api/users', userRouter);
app.use('/api/products', productRouter)
app.get('/',(req,res)=>{
    res.send("server ready")
})
app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message})

})

const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`serving at port ${port}`)
})