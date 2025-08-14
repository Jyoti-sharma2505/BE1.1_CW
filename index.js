const {initializeDatabase} =require("./db/db.connect");
const fs=require("fs");
const Movie = require("./models/movie.models");
const Twitter = require("./models/twitter.models");
const Resturant = require("./models/resturant.model");
const Hotel = require("./models/hotel.model");
// const { title } = require("process");
// const { release } = require("os");
initializeDatabase();

// const jsonData = fs.readFileSync("movies.json","utf-8")
const jsonData1=fs.readFileSync("profile.json","utf-8")

// const moviesData = JSON.parse(jsonData);
const profileData = JSON.parse(jsonData1)

// function seedData(){
//     try{
//       for(const movieData of moviesData){
//         const newMovie = new Movie({
//             title:movieData.title,
//             releaseYear:movieData.releaseYear,
//             genre:movieData.genre,
//             director:movieData.director,
//             actors:movieData.actors,
//             language:movieData.language,
//             country:movieData.country,
//             rating:movieData.rating,
//             plot:movieData.plot,
//             awards:movieData.awards,
//             posterUrl:movieData.posterUrl,
//             trailerUrl:movieData.trailerUrl,
//         })
//        newMovie.save();
//       }
//     }catch(error){
//     console.log("Error seeding the data",error)
//     }
// }

const newMovie = {
    title: "New Movie",
    releaseYear: 2025,
    genre: [ "Drama"],
    director: "Aditya Roy Chopra",
    actors: ["Actor1", "Actore2"],
    language: "Hindi",
    country: "India",
    rating: 5.1,
    plot: "A young man and woman fall in love on a Australia trip.",
    awards: "IFA Filmfare Awards",
    posterUrl: "https://example.com/new-poster1.jpg",
    trailerUrl: "https://example.com/mew-trailer1.mp4"
}
async function createMovie(newMovie){
  try{
    const movie=new Movie(newMovie);
    const saveMovie =await movie.save()
    console.log("New movie data",saveMovie)
  }catch(error){
    throw error
}
}
createMovie(newMovie)

const newRestaurant = {
  name: "Cha Cha",
  cuisine: ["Spanish"],
  location: "123 Main Street, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://example.com",
  phoneNumber: "+1234567890",
  openHours: "Mon-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$$ (11-30)",
  reservationsNeeded: true,
  isDeliveryAvailable: true,
  menuUrl: "https://example.com/menu",
  photos: ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"],
};

async function creatResturant(newRestaurant){
    try{
        const restursnt = new Resturant(newRestaurant);
        const saveRestursnt =await restursnt.save();
        console.log("New Resturant data",saveRestursnt)

    }catch(error){
        throw error;
    }
}
creatResturant(newRestaurant);

const newHotel = {
  name: "New Hotel",
  category: "Mid-Range",
  location: "123 Main Street, Frazer Town",
  rating: 4.0,
  reviews: [],
  website: "https://hotel-example.com",
  phoneNumber: "+1234567890",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  amenities: ["Laundry", "Room Service"],
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: false,
  isRestaurantAvailable: true,
  photos: ["https://example.com/hotel-photo1.jpg", "https://example.com/hotel-photo2.jpg"],
};

async function createHotel(newHotel){
    try{
        const hotel = new Hotel(newHotel);
        const saveHotel= await hotel.save();
        console.log("New Hotel Data",saveHotel)

    }catch(error){
        throw error;
    }
}
createHotel(newHotel)

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

// seedData()