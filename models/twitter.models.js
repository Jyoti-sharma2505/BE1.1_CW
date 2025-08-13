const mongoose = require("mongoose");

const TwitterSchema = new mongoose.Schema({
    username: String,
    profilePicUrl:String,
    fullName:String,
    bio:String,
    companyName:String,
    location:String,
    portfolioUrl:String,
    handle:String,
    followerCount:Number,
    followingCount:Number,
    isOnline : Boolean
})

const profile = mongoose.model("Profile",TwitterSchema);

module.exports=profile