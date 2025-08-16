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
// createMovie(newMovie)
//Find the one data in whole array the use findOne.

async function readMovieDirector(movieTitle){
    try{
        const title=await Movie.findOne({title:movieTitle});
        console.log(title)

    }catch(error){
        throw error
    }
}
readMovieDirector("Bahubali: The Beginning")

const newRestaurant = {
  name: "Yo China",
  cuisine: ["Chinese", "Italian"],
  location: "MG Road, Bangalore",
  rating: 3.9,
  reviews: [],
  website: "https://yo-example.com",
  phoneNumber: "+1288997392",
  openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isDeliveryAvailable: false,
  menuUrl: "https://yo-example.com/menu",
  photos: ["https://example.com/yo-photo1.jpg", "https://example.com/yo-photo2.jpg", "https://example.com/yo-photo3.jpg"]
};
//question 2

async function creatResturant(newRestaurant){
    try{
        const restursnt = new Resturant(newRestaurant);
        const saveRestursnt =await restursnt.save();
        console.log("New Resturant data",saveRestursnt)

    }catch(error){
        throw error;
    }
}
// creatResturant(newRestaurant);
//question3

async function readAllResturant(){
    try{
        const readAll=await Resturant.find();
        console.log(readAll)

    }catch(error){
        throw error
    }
}
// readAllResturant()
//question4

async function readByName(reasturantName){
   try{
    const readName=await Resturant.findOne({name:reasturantName});
    console.log(readName)

   }catch(error){
    throw error
   }
}
// readByName("Yo China")
//question 5:

async function readResvation(){
    try{
        const read=await Resturant.find({reservationsNeeded:true})
        console.log(read)

    }catch(error){
        throw error;
    }
}
// readResvation()
//question 6:

async function readDelivery(){
    try{
        const delivery=await Resturant.find({isDeliveryAvailable:true});
        console.log(delivery)
    }catch(error){
        throw error
    }
}
// readDelivery()
//question 7:

async function readPhoneNumber(number){
  try{
    const phone=await Resturant.findOne({phoneNumber:number});
    console.log(phone)
  }catch(error){
    throw error;
  }
}
// readPhoneNumber("+1288997392")
//question 8:

async function readAllCuision(){
    try{
     const read=await Resturant.find({cuisine:"Italian"});
     console.log(read)
    }catch(error){
        throw error;
    }
}
// readAllCuision();


const newHotel = {
  name: "Sunset Resort",
  category: "Resort",
  location: "12 Main Road, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://sunset-example.com",
  phoneNumber: "+1299655890",
  checkInTime: "2:00 PM",
  checkOutTime: "11:00 AM",
  amenities: ["Room Service", "Horse riding", "Boating", "Kids Play Area", "Bar"],
  priceRange: "$$$$ (61+)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: true,
  isSpaAvailable: true,
  isRestaurantAvailable: true,
  photos: ["https://example.com/hotel2-photo1.jpg", "https://example.com/hotel2-photo2.jpg"],
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
// createHotel(newHotel)
//Question 3:

async function readAllHotel() {
    try{
       const hotel=await Hotel.find();
       console.log(hotel)
    }catch(error){
        throw error;
    }
}
// readAllHotel()
//Question 4:

async function readName(nameHotel){
    try{
      const name=await Hotel.findOne({name:nameHotel})
      console.log(name)
    }catch(error){
        throw error;
    }
}
// readName("Lake View");
//Question 5:

async  function readAllDetails(){
  try{
  const details=await Hotel.find({isParkingAvailable:true});
  console.log(details)
  }catch(error){
    throw error;
  }
}
// readAllDetails()
//Question 6:

async function readAllResturant(){
    try{
   const resturant = await Hotel.find({isRestaurantAvailable:true})
   console.log(resturant)
    }catch(error){
        throw error;
    }
}
// readAllResturant();
//question 7:
async function readAllRange(categoryNmae ){
    try{
   const category = await Hotel.findOne({category:categoryNmae})
   console.log(category)
    }catch(error){
        throw error;
    }
}
// readAllRange("Mid-Range");
//Question 8:
async function readAllRange(price){
    try{
    const range=await Hotel.findOne({priceRange:price});
    console.log(range)
    }catch(error){
        throw error;
    }
}
// readAllRange("$$$$ (61+)");
//question 9:
async function readAllRange(range){
    try{
    const readRange=await Hotel.findOne({rating:range});
    console.log(readRange)
    }catch(error){
        throw error;
    }
}
// readAllRange(4.0);
//Question 10:
async function readAllPhone(number){
    try{
    const phone=await Hotel.findOne({phoneNumber:number});
    console.log(phone)
    }catch(error){
        throw error
    }
}
readAllPhone("+1299655890")

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