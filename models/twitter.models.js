const mongoose = require("mongoose");

const TwitterSchema = new mongoose.Schema({
    userName: String,
    profilePic:String,
    fullName:String,
    bio:String,
    companyName:String,
    city:String,
    portfolioLink:String,
    handle:String,
    followersCount:Number,
    followingCount:Number,
    isOnline : Boolean
})

const profile = mongoose.model("Profile",TwitterSchema);

module.exports=profile