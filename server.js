const express = require('express')
const app = express()
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("Hello World, Welcome to my webapp✨✨😃")
}) 

const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`server is ruuning on ${PORT}`)
})