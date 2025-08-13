const {initializeDatabase} =require("./db/db.connect");
const fs=require("fs");
const Movie = require("./models/movie.models");
const Twitter = require("./models/twitter.models")
// const { title } = require("process");
// const { release } = require("os");
initializeDatabase();

const jsonData = fs.readFileSync("movies.json","utf-8")
const jsonData1=fs.readFileSync("profile.json","utf-8")

const moviesData = JSON.parse(jsonData);
const profileData = JSON.parse(jsonData1)

function seedData(){
    try{
      for(const movieData of moviesData){
        const newMovie = new Movie({
            title:movieData.title,
            releaseYear:movieData.releaseYear,
            genre:movieData.genre,
            director:movieData.director,
            actors:movieData.actors,
            language:movieData.language,
            country:movieData.country,
            rating:movieData.rating,
            plot:movieData.plot,
            awards:movieData.awards,
            posterUrl:movieData.posterUrl,
            trailerUrl:movieData.trailerUrl,
        })
       newMovie.save();
      }
    }catch(error){
    console.log("Error seeding the data",error)
    }
}

function seedProfile(){
    try{
        for(const profile of profileData){
            const newProfile = new Twitter({
                 fullName:profile.fullName,
                 username:profile.username,
                 bio:profile.bio,
                 profilePicUrl:profile.profilePicUrl,
                 followingCount:profile.followingCount,
                 followerCount:profile.followerCount,
                 companyName:profile.companyName,
                 location:profile.location,
                 portfolioUrl:profile.portfolioUrl,
            })
            newProfile.save()
        }

    }catch(error){
        console.log("Error seeding the database",error)
    }
}

seedProfile()

seedData()