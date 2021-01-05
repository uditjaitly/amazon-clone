import express from 'express'
import data from './data.js'
const app = express();
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

app.get('/',(req,res)=>{
    res.send("server ready")
})
const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`serving at port ${port}`)
})