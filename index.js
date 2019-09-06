const express = require('express')
const app = express()
const path = require('path')
const rootDir = path.dirname(process.mainModule.filename)

app.use(express.static(path.join(__dirname,'public')))

app.use('/',(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views','homepage.html'))
})

app.listen(3000)