const mongoose = require("mongoose");

const carSchema =new mongoose.Schema({
    model:String,
    releseyear: Number,
    make: String,
})

const Car = mongoose.model("Car", carSchema);

module.exports = Car