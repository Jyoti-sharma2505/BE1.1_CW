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

//cw Work find the update value
async function updateTheRating(movieId,updaterating){
  try{
  const update=await Movie.findByIdAndUpdate(movieId,updaterating,{new:true});
  console.log(update);
  }catch(error){
    throw error;
  }
}
// updateTheRating("689d7e12afedc9d9c29422f5",{rating:8.5})
async function updateByTitle(movieTitle,updateYear){
    try{
    const update = await Movie.findOneAndUpdate({title:movieTitle},updateYear,{new:true});
    console.log(update)
    }catch(error){
        throw error;
    }
}
// updateByTitle("PK",{releaseYear:2015});
//BE2.4_CW 
async function deleteById(movieId){
    try{
     const deleteId =await Movie.findByIdAndDelete(movieId ,{new:true});
     console.log(deleteId)
    }catch(error){
        console.log("Nor catch find",error);
    }
}
// deleteById("689f17dccfed2020562c97c7");
//2:
async function deleteByTitle(movieTitle){
    try{
        const deleteName = await Movie.findOneAndDelete({title:movieTitle});
        console.log(deleteName)
    }catch(error){
        console.log("Error for delete",error)
    }
}
// deleteByTitle("Dilwale Dulhania Le Jayenge")

//Find the one data in whole array the use findOne.

async function readMovieDirector(movieTitle){
    try{
        const title=await Movie.findOne({title:movieTitle});
        console.log(title)

    }catch(error){
        throw error
    }
}
// readMovieDirector("Bahubali: The Beginning")

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

//Hw question 1/2:
async function updateIdResturant(movieid,updateRating){
    try{
        const update = await Resturant.findByIdAndUpdate(movieid,updateRating,{new:true});
        console.log(update);
    }catch(error){
        throw error;
    }
}
// updateIdResturant("689f1c96f68c6dd52bb6d39a",{name:"Som Sarovar"});

//Question 3:
async function updatePhone(moviePhone,udateData){
    try{
  const update = await Resturant.findOneAndUpdate({phoneNumber:moviePhone},udateData,{new:true});
  console.log(update);
    }catch(error){
        throw error
    }
}
// updatePhone("+1288997392",{isDeliveryAvailable :true});


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

//BE2.4_HW2 Question 1:deleteHotelById 
async function deleteHotelById (hotelId){
    try{
  const deleteById = await Hotel.findByIdAndDelete(hotelId);
    }catch(error){
        throw error;
    }
}
// deleteHotelById ("689f247009d888d186c7f9ec");
//deleteHotelByPhoneNumber Question :2
async function deleteHotelByPhoneNumber (hotelPhone){
    try{  
  const deletePhone = await Hotel.findOneAndDelete({phoneNumber:hotelPhone});
  console.log(deletePhone)
    }catch(error){
        throw error;
    }
}
deleteHotelByPhoneNumber ("+1234555890")

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
// readAllPhone("+1299655890");
//BE2.4_HW1 Question 1:
async function deleteRestaurantById (resturantId){
    try{
  const deleteId = await Resturant.findByIdAndDelete(resturantId)
    }catch(error){
        throw error;
    }
}
// deleteRestaurantById ("689f1bd941d73d55370dc73e");

//Question 2:deleteRestaurantByName 
async function deleteRestaurantByName (resturantName){
    try{
  const deleteName = await Resturant.findOneAndDelete({name:resturantName});
  console.log(deleteName)
    }catch(error){
        throw error;
    }
}
deleteRestaurantByName ("Som Sarovar")

//Hw2 Question 1:
async function updateHotel(hotelId,updateValue){
    try{
  const update = await Hotel.findByIdAndUpdate(hotelId,updateValue,{new:true});
  console.log(update)
    }catch(error){
        throw error;
    }
}
//  updateHotel("689f247009d888d186c7f9ec",{checkOutTime:"11 Am"})
//Question 2:
async function updateByName(hotelName,updateRating){
   try{
  const update = await Hotel.findOneAndUpdate({name:hotelName},updateRating,{new:true});
  console.log(update);
   }catch(error){
    throw error;
   }
}
// updateByName("Sunset Resort",{rating:4.2});
//Question 3:
async function updatePhone(hotelPhone,updatePhone){
    try{
   const update= await Hotel.findOneAndUpdate({phoneNumber:hotelPhone},updatePhone,{new:true});
   console.log(update)
    }catch(error){
        throw error;
    }
}
updatePhone("+1299655890",{phoneNumber:"+1997687392"})

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