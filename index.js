require('dotenv').config()
const express = require('express')
const send = require('send')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('OnkarSutar')
})

app.get('/login',(req,res)=>{
    res.send('<h1>OnkarSutar</h1>')
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port${port}`)
})