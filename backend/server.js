import express from 'express'
import data from './data.js'
import mongoose from 'mongoose'
import userRouter from './routers/userRouter.js';
const app = express();


mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazon',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
app.get('/api/products/:id',(req,res)=>{
  
    const productDetails = data.products.find((x)=> x._id===req.params.id);
    if(productDetails){
        res.send(productDetails);
    }
    else{
        res.status(404).send({message:"Product Not Found"})
    }
})

app.get('/api/products',(req,res)=>{
    res.send(data.products)
})
app.use('/api/users', userRouter);
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