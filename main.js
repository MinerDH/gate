import express from "express";
import fetch from "node-fetch"
import cors from "cors"
import brotli from "brotli"
const app = express()
const port = 3000


app.use(cors());


app.get("/api/:rl",async (req,res)=>{
let resp = await fetch("https://"+atob(req.params.rl))
let data = await resp.text()
res.setHeader('Content-Type', 'text/html')
res.setHeader('Content-Encoding', 'br')
res.send(brotli.compress(data))
})

app.listen(port,()=>{
    console.log("server running on "+port)
})