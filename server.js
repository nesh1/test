const express = require('express')
const path = require('path')

const app = express()
const port = 8000

app.get('/',(req,res)=>{
    res.send("hellow there")
})

app.get('/a',(req,res)=>{
    res.sendFile(path.join(__dirname +'/index.html'))

})

app.listen(port,()=>{
    console.log(`listening on ${port}`)
})