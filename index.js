const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("Twitter")
})

app.get('/login',(req,res)=>{
  res.send('<h1> please login at hehe </h1>')
})

app.get('/chai',(req,res)=>{
  res.send("<h2> Chai is good for health</h2>")
})
app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${port}`)
})
