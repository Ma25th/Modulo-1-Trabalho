import express  from "express";
const host="localhost";
const porta=3000;
const app=express()
app.listen(porta,host,()=>{console.log(`Servidor ouvindo em http://${host}:${porta}`);})
