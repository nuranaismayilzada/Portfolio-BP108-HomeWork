const express = require('express')
const cors=require('cors')
const app = express()
app.use(cors())
var bodyParser = require('body-parser')
const routes=require("./src/routes/productRoute")
require ("./src/config/db")
 app.use(bodyParser.json())
 app.use("/api",routes)

const port = 3000

let arr=[
    {
        name:"Nurane"
    },
    {
        name:"nunu"
    },
    {
        name:"nurus"
    }
]
app.get('/', (req, res) => {
  res.send(arr)
})
app.post("/",(req,res)=>{
    console.log(req.body);
    arr.push(req.body)
    res.send("post olundu")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})