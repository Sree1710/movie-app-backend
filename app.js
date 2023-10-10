const Express=require('express')
const bodyParser=require('body-parser')
const Cors=require('cors')
const mongoose=require('mongoose')
const movieModel = require('./movieModel')

var app=Express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://sreelekshmisl1710:Dharithri@cluster0.y83cozw.mongodb.net/movieDB?retryWrites=true&w=majority",{useNewUrlParser:true})

app.post("/addm",async(request,response)=>{
    let data=request.body
    const movie=new movieModel(data)
    let result=await movie.save()
    if (result.movieId!="") {
        response.json({"status":"success"})
    } else {
        response.json({"status":"error"})
    }
})

app.get("/viewm",async(request,response)=>{
    let data=await movieModel.find()
    response.json(data)
})

app.listen(3001,()=>{
    console.log("Server is running")
})