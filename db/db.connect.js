const mongoose=require("mongoose");
require("dotenv").config();

const mongoUri=process.env.MONGODB;

const initializeDatabase = async()=>{
  await  mongoose.connect(mongoUri)
.then(()=>{
    console.log("Conneted to Database");
})
.catch((error)=>console.log("Error connected to Database",error))
}

module.exports = {initializeDatabase}