import express from "express";
import fetch from "node-fetch"
import cors from "cors"
import compression from "compression"
const app = express()
const port = 3000


app.use(cors());
app.use(compression({threshold:1, level:6}))

app.get("/api/:rl",async (req,res)=>{
let resp = await fetch("https://"+atob(req.params.rl))
let data = await resp.text()
res.send(data)
})

app.listen(port,()=>{
    console.log("server running on "+port)
})