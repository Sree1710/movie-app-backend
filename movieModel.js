const mongoose=require('mongoose')
const movieModel=mongoose.model("movies",mongoose.Schema(
    {
        movieId:{type:String,required:true},
        movieName:String,
        director:String,
        producer:String,
        movieImage:String,
        releaseDate:String,
        review:String
    }
))
module.exports=movieModel