
console.log("hello friend");

const express = require('express');
const cors=require('cors');
const app =express();
require ('dotenv').config();
const Port=process.env.PORT;

app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send('Hello from node js');
})
const server = () =>{
   app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`);
   })};
server();
